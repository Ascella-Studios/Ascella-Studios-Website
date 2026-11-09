// Contact form topics. Shared by the form (for options and ?topic= preselect)
// and the API route (for validation and the HubSpot note label).

export const CONTACT_TOPICS = {
  solutions: 'Ascella Solutions: website or consult',
  apps: 'Our apps (StreamerGames, HomeHelpersCo)',
  partnerships: 'Partnerships or investment',
  other: 'Something else',
} as const;

export type ContactTopic = keyof typeof CONTACT_TOPICS;

export function isContactTopic(value: unknown): value is ContactTopic {
  return typeof value === 'string' && Object.hasOwn(CONTACT_TOPICS, value);
}
