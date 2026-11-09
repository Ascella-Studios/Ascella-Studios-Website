// HubSpot static lists that /api/waitlist may add contacts to.
//
// The list ID arrives from the browser, so without this check anyone could add
// contacts to any list in the HubSpot account. When the app starter kit
// generates a waitlist page for a new app, register that app's list ID here
// (or, without a code change, in the WAITLIST_EXTRA_LIST_IDS env var as a
// comma-separated list).

/** Studio updates ("Get notified when we ship something new"). */
export const STUDIO_UPDATES_LIST_ID = '13';

const REGISTERED_LIST_IDS: readonly string[] = [STUDIO_UPDATES_LIST_ID];

export function allowedListIds(extra: string | undefined = process.env.WAITLIST_EXTRA_LIST_IDS): Set<string> {
  const fromEnv = (extra ?? '')
    .split(',')
    .map((id) => id.trim())
    .filter(Boolean);
  return new Set([...REGISTERED_LIST_IDS, ...fromEnv]);
}

export function isAllowedListId(listId: unknown, extra?: string): boolean {
  if (typeof listId !== 'string' || !/^\d+$/.test(listId)) return false;
  return allowedListIds(extra).has(listId);
}
