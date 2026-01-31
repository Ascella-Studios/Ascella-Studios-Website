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
    tagline: 'AI-powered faceless video generator for TikTok and Reels',
    description:
      'Generate faceless short-form videos in minutes. Enter a topic, pick a vibe, and GhostlyClips handles the script, voiceover, animated captions, and background media—all in a simple 6-step wizard.',
    status: 'Coming Q1 2026',
    statusColor: 'sky',
    logo: '/logos/ghostlyclips.png',
    features: [
      'AI script generation optimized for viral content',
      'Natural voiceovers with multiple voice styles',
      'Animated captions synced to voiceover',
      'Background media compositing',
      'Complete 6-step video creation wizard',
    ],
    tech: ['Next.js', 'Remotion', 'OpenAI', 'Stripe'],
    gradient: 'from-indigo-500 via-violet-500 to-purple-500',
    comingSoon: true,
    releaseDate: '2026-03-01', // Target Q1 2026
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
