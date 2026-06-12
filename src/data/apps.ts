export interface App {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: string;
  statusColor: string;
  logo?: string;
  features: string[];
  tech: string[];
  gradient: string;
  comingSoon: boolean;
  releaseDate?: string; // ISO date string for sorting
  externalUrl?: string; // External URL for live apps
}

// App catalog — empty until the first app ships.
// To add an app: add an entry here, drop its logo in /public/logos/{id}.png,
// and re-create the /apps page (see CLAUDE.md "Launch checklist").
export const apps: App[] = [];

// Get the newest app (by releaseDate)
export const getNewestApp = (): App | null => {
  if (apps.length === 0) return null;

  const sortedApps = [...apps].sort((a, b) => {
    const dateA = a.releaseDate ? new Date(a.releaseDate).getTime() : 0;
    const dateB = b.releaseDate ? new Date(b.releaseDate).getTime() : 0;
    return dateB - dateA;
  });

  return sortedApps[0];
};
