import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { Client } from "@hubspot/api-client";
import { FilterOperatorEnum } from "@hubspot/api-client/lib/codegen/crm/contacts";

interface TrackEvent {
  event: "impression" | "signup";
  idea_id: string;
  slug: string;
  email?: string;
}

interface AnalyticsData {
  [ideaId: string]: {
    impressions: number;
    signups: number;
    emails: string[];
    lastUpdated: string;
  };
}

const ANALYTICS_FILE = path.join(process.cwd(), "data", "analytics.json");

async function subscribeToNewsletter(email: string, productName: string): Promise<void> {
  const hubspotToken = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (!hubspotToken) {
    console.warn("HUBSPOT_PRIVATE_APP_TOKEN not configured, skipping newsletter signup");
    return;
  }

  const hubspotClient = new Client({ accessToken: hubspotToken });

  // Check if contact already exists
  let contactId: string | null = null;
  try {
    const searchResponse = await hubspotClient.crm.contacts.searchApi.doSearch({
      filterGroups: [
        {
          filters: [
            {
              propertyName: "email",
              operator: FilterOperatorEnum.Eq,
              value: email,
            },
          ],
        },
      ],
      properties: ["email"],
      limit: 1,
    });

    if (searchResponse.total > 0 && searchResponse.results[0]) {
      contactId = searchResponse.results[0].id;
    }
  } catch {
    // Search failed, will try to create new contact
  }

  if (contactId) {
    // Update existing contact to ensure they're subscribed
    await hubspotClient.crm.contacts.basicApi.update(contactId, {
      properties: {
        hs_marketable_status: "true",
        newsletter_signup_source: productName,
      },
    });
  } else {
    // Create new contact subscribed to newsletter
    await hubspotClient.crm.contacts.basicApi.create({
      properties: {
        email: email,
        hs_marketable_status: "true",
        newsletter_signup_source: productName,
      },
    });
  }
}

async function loadAnalytics(): Promise<AnalyticsData> {
  try {
    const data = await fs.readFile(ANALYTICS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    // File doesn't exist yet, return empty object
    return {};
  }
}

async function saveAnalytics(data: AnalyticsData): Promise<void> {
  // Ensure directory exists
  const dir = path.dirname(ANALYTICS_FILE);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(ANALYTICS_FILE, JSON.stringify(data, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const body: TrackEvent = await request.json();
    const { event, idea_id, slug, email } = body;

    if (!event || !idea_id) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Load current analytics
    const analytics = await loadAnalytics();

    // Initialize entry if needed
    if (!analytics[idea_id]) {
      analytics[idea_id] = {
        impressions: 0,
        signups: 0,
        emails: [],
        lastUpdated: new Date().toISOString(),
      };
    }

    // Update based on event type
    if (event === "impression") {
      analytics[idea_id].impressions += 1;
    } else if (event === "signup") {
      analytics[idea_id].signups += 1;
      if (email && !analytics[idea_id].emails.includes(email)) {
        analytics[idea_id].emails.push(email);

        // Subscribe to HubSpot newsletter
        try {
          await subscribeToNewsletter(email, slug);
        } catch (hubspotError) {
          console.error("Failed to subscribe to HubSpot newsletter:", hubspotError);
          // Don't fail the request if HubSpot fails
        }
      }
    }

    analytics[idea_id].lastUpdated = new Date().toISOString();

    // Save updated analytics
    await saveAnalytics(analytics);

    // Optionally forward to pipeline webhook
    const webhookUrl = process.env.PIPELINE_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event,
            idea_id,
            slug,
            email,
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (webhookError) {
        console.error("Failed to forward to pipeline webhook:", webhookError);
        // Don't fail the request if webhook fails
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        idea_id,
        impressions: analytics[idea_id].impressions,
        signups: analytics[idea_id].signups,
        conversion:
          analytics[idea_id].impressions > 0
            ? (
                (analytics[idea_id].signups / analytics[idea_id].impressions) *
                100
              ).toFixed(1) + "%"
            : "0%",
      },
    });
  } catch (error) {
    console.error("Track API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve analytics (for admin/debugging)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const ideaId = searchParams.get("idea_id");

    const analytics = await loadAnalytics();

    if (ideaId) {
      const data = analytics[ideaId];
      if (!data) {
        return NextResponse.json(
          { error: "No analytics for this idea" },
          { status: 404 }
        );
      }
      return NextResponse.json({
        idea_id: ideaId,
        ...data,
        conversion:
          data.impressions > 0
            ? ((data.signups / data.impressions) * 100).toFixed(1) + "%"
            : "0%",
      });
    }

    // Return all analytics with summary
    const summary = Object.entries(analytics).map(([id, data]) => ({
      idea_id: id,
      impressions: data.impressions,
      signups: data.signups,
      conversion:
        data.impressions > 0
          ? ((data.signups / data.impressions) * 100).toFixed(1) + "%"
          : "0%",
      lastUpdated: data.lastUpdated,
    }));

    const totalImpressions = summary.reduce((sum, s) => sum + s.impressions, 0);
    const totalSignups = summary.reduce((sum, s) => sum + s.signups, 0);

    return NextResponse.json({
      pages: summary,
      totals: {
        impressions: totalImpressions,
        signups: totalSignups,
        conversion:
          totalImpressions > 0
            ? ((totalSignups / totalImpressions) * 100).toFixed(1) + "%"
            : "0%",
      },
    });
  } catch (error) {
    console.error("Track API GET error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
