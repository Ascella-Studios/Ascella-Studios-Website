// The Ascella Studios product catalog. Drives the home page, /apps,
// /apps/[id] case studies, the footer, and the sitemap.
//
// Every claim here must be true on the live product today. Before adding a
// figure (users, revenue, ratings), check that it is real.
//
// To add an app: add an entry, put its images in /public/apps/{id}/, and the
// pages pick it up automatically.

export interface AppImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface AppHighlight {
  title: string;
  description: string;
}

export interface AppGalleryItem extends AppImage {
  caption: string;
}

export interface App {
  id: string;
  name: string;
  /** Public URL of the live product. */
  url: string;
  /** URL as shown in copy, e.g. "streamergames.io". */
  displayUrl: string;
  status: 'Live' | 'In development';
  /** When it went live, in plain words. */
  launched: string;
  /** Short kind-of-software label, e.g. "SaaS · Live streaming". */
  category: string;
  platforms: string[];
  /** Brand colour of the product itself, used for small accents only. */
  accent: string;
  icon: string;
  tagline: string;
  summary: string;
  /** Case study: the problem, in a paragraph or two. */
  problem: string[];
  /** Case study: what we built and how it works. */
  approach: string[];
  highlights: AppHighlight[];
  /** How the product makes money, stated plainly. */
  model: string;
  stack: string[];
  hero: AppImage;
  gallery?: AppGalleryItem[];
  /** Small print shown on the case study, e.g. trademark disclaimers. */
  note?: string;
}

export const apps: App[] = [
  {
    id: 'streamergames',
    name: 'StreamerGames',
    url: 'https://streamergames.io',
    displayUrl: 'streamergames.io',
    status: 'Live',
    launched: 'September 2026',
    category: 'SaaS · Live streaming',
    platforms: ['Web', 'OBS Browser Source', 'Twitch chat'],
    accent: '#2ed6c6',
    icon: '/apps/streamergames/icon.svg',
    tagline: 'The chat-game arcade for Twitch streams.',
    summary:
      'Six chat games that run as a single OBS Browser Source. Viewers play by typing in Twitch chat—no accounts, nothing to install.',
    problem: [
      'Chat is the best part of a stream, but most of the time it has nothing to do. Streamers who want to give it something usually end up juggling a separate overlay for every game.',
      'Chat-game tools also tend to add friction where it hurts most: viewers asked to sign up before they can play, free plans capped by the minute, AI features metered by the credit.',
    ],
    approach: [
      'StreamerGames is one Browser Source URL that holds every game. The streamer adds it to OBS once, then switches games from a dashboard mid-stream without touching their scene.',
      'Viewers join by typing in chat, with commands like !join or a letter answer, so there is nothing for them to install or sign up for. Every game is free to run with no daily time limit. Pro adds live AI: race commentary that reacts to what just happened, quiz questions written on the streamer’s theme, and boss lines that answer chat.',
    ],
    highlights: [
      {
        title: 'One URL, every game',
        description: 'A single Browser Source in OBS. Switch games from the dashboard mid-stream.',
      },
      {
        title: 'Viewers never sign up',
        description: 'Chat plays by typing commands. No accounts, no extensions, nothing to install.',
      },
      {
        title: 'Free, no time limit',
        description: 'Every game is free to run, with no daily cap and no card required.',
      },
      {
        title: 'Live AI on Pro',
        description: 'Commentary, themed trivia, and boss dialogue generated live from what chat does.',
      },
    ],
    model:
      'Every game is free to run. Pro is $9/month or $79/year, with AI included and no credit meter. StreamerGames takes no cut of a streamer’s revenue.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Claude API', 'Twitch chat', 'Vercel'],
    hero: {
      src: '/apps/streamergames/duck-derby.jpg',
      alt: 'Duck Derby: colourful rubber ducks racing down a glowing turquoise river',
      width: 1280,
      height: 720,
    },
    gallery: [
      {
        src: '/apps/streamergames/duck-derby.jpg',
        alt: 'Duck Derby game art',
        caption: 'Duck Derby · chat types !join',
        width: 1280,
        height: 720,
      },
      {
        src: '/apps/streamergames/trivia-royale.jpg',
        alt: 'Trivia Royale game art',
        caption: 'Trivia Royale · chat answers A–D',
        width: 1280,
        height: 720,
      },
      {
        src: '/apps/streamergames/boss-rush.jpg',
        alt: 'Boss Rush game art',
        caption: 'Boss Rush · chat types !attack',
        width: 1280,
        height: 720,
      },
      {
        src: '/apps/streamergames/word-storm.jpg',
        alt: 'Word Storm game art',
        caption: 'Word Storm · chat types the word',
        width: 1280,
        height: 720,
      },
      {
        src: '/apps/streamergames/tug-of-war.jpg',
        alt: 'Tug of War game art',
        caption: 'Tug of War · chat picks a side',
        width: 1280,
        height: 720,
      },
      {
        src: '/apps/streamergames/horse-derby.jpg',
        alt: 'Horse Derby game art',
        caption: 'Horse Derby · chat types !join',
        width: 1280,
        height: 720,
      },
    ],
    note: 'StreamerGames works with Twitch. It is an unofficial third-party tool, not affiliated with, endorsed by, or sponsored by Twitch or Amazon.',
  },
  {
    id: 'homehelpersco',
    name: 'HomeHelpersCo',
    url: 'https://www.homehelpersco.com',
    displayUrl: 'homehelpersco.com',
    status: 'Live',
    launched: '2026',
    category: 'Web platform · Home services',
    platforms: ['Web', 'Mobile web', 'Email'],
    accent: '#cd4c13',
    icon: '/apps/homehelpersco/icon.svg',
    tagline: 'Tell us the job. We’ll send it to local pros.',
    summary:
      'A free request board for homeowners around Watertown and Jefferson County, Wisconsin. Describe the job once and it goes to local contractors, who each set their own pricing.',
    problem: [
      'When a homeowner needs a plumber or a roofer, they usually fall back on a Google search or a neighbour’s guess, then spend an afternoon calling around.',
      'Small contractors have the opposite problem. They want steady local work but can’t afford to keep paying for advertising to find it.',
    ],
    approach: [
      'HomeHelpersCo turns ten phone calls into one request. A homeowner picks a trade, describes the job and their town, and the request goes to matching local pros by email. Pros reply with their own pricing.',
      'It’s built for the way people actually search: a page for every trade and every town it serves, so “plumber in Watertown” leads somewhere useful. Contractors join free.',
    ],
    highlights: [
      {
        title: 'One request, not ten calls',
        description: 'Describe the job once. Matching local pros get it by email.',
      },
      {
        title: 'Free for homeowners',
        description: 'No fees, no subscription, no cut of the job.',
      },
      {
        title: 'Local, not national',
        description: 'Watertown, Jefferson, Fort Atkinson, Lake Mills, Oconomowoc and nearby towns.',
      },
      {
        title: 'Eight trades',
        description: 'Plumbing, electrical, HVAC, landscaping, roofing, painting, handyman, and cleaning.',
      },
    ],
    model: 'Always free for homeowners. Contractors join free.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Resend', 'Tailwind CSS', 'Vercel'],
    hero: {
      src: '/apps/homehelpersco/screen-desktop.png',
      alt: 'The HomeHelpersCo home page: “Tell us the job. We’ll send it to local pros.” beside a sample work order',
      width: 1440,
      height: 900,
    },
    gallery: [
      {
        src: '/apps/homehelpersco/screen-desktop.png',
        alt: 'HomeHelpersCo home page',
        caption: 'Home page · one request instead of ten calls',
        width: 1440,
        height: 900,
      },
      {
        src: '/apps/homehelpersco/og-image.png',
        alt: 'HomeHelpersCo brand lockup',
        caption: 'Brand · roofline mark and hazard-orange accent',
        width: 1200,
        height: 630,
      },
    ],
  },
];

export const getApp = (id: string): App | undefined => apps.find((app) => app.id === id);
