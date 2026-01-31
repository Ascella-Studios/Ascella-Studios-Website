import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@hubspot/api-client';
import { FilterOperatorEnum } from '@hubspot/api-client/lib/codegen/crm/contacts';

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

    // Format message with subject
    const formattedMessage = subject
      ? `[${subject}] ${message}`
      : message;

    // Create or update contact using HubSpot's upsert-like behavior
    // We use createOrUpdate by first trying to get, then create or update
    try {
      // Try to get existing contact by email
      const searchResponse = await hubspotClient.crm.contacts.searchApi.doSearch({
        filterGroups: [{
          filters: [{
            propertyName: 'email',
            operator: FilterOperatorEnum.Eq,
            value: email,
          }],
        }],
        properties: ['email', 'firstname', 'lastname'],
        limit: 1,
      });

      let contactId: string;

      if (searchResponse.total > 0 && searchResponse.results[0]) {
        // Contact exists - update with name
        contactId = searchResponse.results[0].id;
        await hubspotClient.crm.contacts.basicApi.update(
          contactId,
          {
            properties: {
              firstname: firstName,
              lastname: lastName,
            },
          }
        );
      } else {
        // Create new contact
        const newContact = await hubspotClient.crm.contacts.basicApi.create({
          properties: {
            email,
            firstname: firstName,
            lastname: lastName,
          },
        });
        contactId = newContact.id;
      }

      // Create a Note engagement with the message
      const noteBody = subject
        ? `**Subject:** ${subject}\n\n${message}`
        : message;

      await hubspotClient.crm.objects.notes.basicApi.create({
        properties: {
          hs_timestamp: new Date().toISOString(),
          hs_note_body: noteBody,
        },
        associations: [
          {
            to: { id: contactId },
            types: [
              {
                associationCategory: 'HUBSPOT_DEFINED',
                associationTypeId: 202, // Note to Contact association
              },
            ],
          },
        ],
      });
    } catch (hubspotError) {
      console.error('HubSpot API error:', hubspotError);
      throw hubspotError;
    }

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
