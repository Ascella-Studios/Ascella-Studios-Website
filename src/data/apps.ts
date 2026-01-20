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
}

export const apps: App[] = [
  {
    id: 'ghostlyclips',
    name: 'GhostlyClips',
    tagline: 'Create viral short-form videos in minutes',
    description:
      'An AI-powered SaaS platform that generates faceless TikTok and Reels content. Enter a topic, select a vibe, and let AI handle the script, voiceover, captions, and editing.',
    status: 'In Development',
    statusColor: 'sky',
    logo: '/logos/ghostlyclips.png',
    features: [
      'AI script generation optimized for viral content',
      'Natural voiceovers with multiple voice styles',
      'Animated captions with TikTok-style effects',
      'Custom backgrounds with AI generation',
      'Niche-specific templates for high engagement',
    ],
    tech: ['Next.js', 'Remotion', 'OpenAI', 'Stripe'],
    gradient: 'from-indigo-500 via-violet-500 to-purple-500',
    comingSoon: true,
    releaseDate: '2026-01-20', // Most recent release
  },
];

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
