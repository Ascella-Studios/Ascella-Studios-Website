import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@hubspot/api-client';
import { FilterOperatorEnum } from '@hubspot/api-client/lib/codegen/crm/contacts';
import { AssociationSpecAssociationCategoryEnum } from '@hubspot/api-client/lib/codegen/crm/objects/notes';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    const hubspotToken = process.env.HUBSPOT_PRIVATE_APP_TOKEN;

    if (!hubspotToken) {
      console.error('HUBSPOT_PRIVATE_APP_TOKEN is not configured');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const hubspotClient = new Client({ accessToken: hubspotToken });

    // Split name into first and last name
    const nameParts = name.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ') || '';

    const formattedMessage = `Subject: ${subject || 'No subject'}\n\n${message}`;

    // Try to find existing contact by email
    let contactId: string | null = null;

    try {
      const searchResponse = await hubspotClient.crm.contacts.searchApi.doSearch({
        filterGroups: [
          {
            filters: [
              {
                propertyName: 'email',
                operator: FilterOperatorEnum.Eq,
                value: email,
              },
            ],
          },
        ],
        properties: ['email'],
        limit: 1,
      });

      if (searchResponse.total > 0 && searchResponse.results[0]) {
        contactId = searchResponse.results[0].id;
      }
    } catch {
      // Search failed, will try to create new contact
    }

    if (!contactId) {
      // New contact - create them first
      const newContact = await hubspotClient.crm.contacts.basicApi.create({
        properties: {
          firstname: firstName,
          lastname: lastName,
          email: email,
        },
      });
      contactId = newContact.id;
    }

    // Create a note with their message (for both new and existing contacts)
    await hubspotClient.crm.objects.notes.basicApi.create({
      properties: {
        hs_timestamp: new Date().toISOString(),
        hs_note_body: `Contact form submission:\n\n${formattedMessage}`,
      },
      associations: [
        {
          to: { id: contactId },
          types: [
            {
              associationCategory: AssociationSpecAssociationCategoryEnum.HubspotDefined,
              associationTypeId: 202, // Note to Contact association
            },
          ],
        },
      ],
    });

    return NextResponse.json(
      { success: true, message: "Thank you for your message! We'll be in touch soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
