import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@hubspot/api-client';
import { FilterOperatorEnum } from '@hubspot/api-client/lib/codegen/crm/contacts';

interface WaitlistData {
  email: string;
  listId: string;
  source?: string; // Optional: track which product/page they signed up from
}

export async function POST(request: NextRequest) {
  try {
    const body: WaitlistData = await request.json();
    const { email, listId, source } = body;

    // Validate required fields
    if (!email || !listId) {
      return NextResponse.json(
        { error: 'Email and listId are required' },
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

    let contactId: string;

    // Step 1: Create or find the contact
    try {
      // Try to find existing contact
      const searchResponse = await hubspotClient.crm.contacts.searchApi.doSearch({
        filterGroups: [{
          filters: [{
            propertyName: 'email',
            operator: FilterOperatorEnum.Eq,
            value: email,
          }],
        }],
        properties: ['email'],
        limit: 1,
      });

      if (searchResponse.total > 0 && searchResponse.results[0]) {
        // Contact exists
        contactId = searchResponse.results[0].id;

        // Optionally update with source if provided
        if (source) {
          await hubspotClient.crm.contacts.basicApi.update(contactId, {
            properties: {
              waitlist_source: source,
            },
          });
        }
      } else {
        // Create new contact
        const newContact = await hubspotClient.crm.contacts.basicApi.create({
          properties: {
            email,
            ...(source && { waitlist_source: source }),
          },
        });
        contactId = newContact.id;
      }
    } catch (contactError) {
      console.error('Error creating/finding contact:', contactError);
      throw contactError;
    }

    // Step 2: Add contact to the static list
    try {
      await hubspotClient.crm.lists.membershipsApi.add(
        listId,
        [contactId]
      );
    } catch (listError: unknown) {
      // Check if error is because contact is already in list (which is fine)
      const errorMessage = listError instanceof Error ? listError.message : String(listError);
      if (!errorMessage.includes('already')) {
        console.error('Error adding to list:', listError);
        throw listError;
      }
      // Contact already in list - that's okay
    }

    return NextResponse.json(
      { success: true, message: "You're on the list! We'll notify you when we launch." },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist API error:', error);

    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
