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

export interface AppDecision {
  title: string;
  body: string;
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
  /** Short factual lines shown on the home page instead of feature bullets. */
  facts: string[];
  /** Case study: real product decisions and why we made them. */
  decisions: AppDecision[];
  /** How the product makes money, stated plainly. */
  model: string;
  stack: string[];
  hero: AppImage;
  gallery?: AppGalleryItem[];
  /** Heading for the gallery section on the case study. */
  galleryTitle?: string;
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
      'Six chat games a streamer adds to OBS once. Viewers play by typing in Twitch chat, without signing up for anything.',
    problem: [
      'Chat is the best part of a stream, but most of the time it has nothing to do. Streamers who want to give it something usually end up juggling a separate overlay for every game.',
      'The tools that exist tend to add friction in the wrong places. Some ask viewers to sign up before they can play. Some cap free play by the minute. Some meter AI features by the credit.',
    ],
    approach: [
      'StreamerGames is one Browser Source URL that holds every game. The streamer adds it to OBS once, then switches games from a dashboard mid-stream without touching their scene.',
      'Viewers join by typing in chat, with commands like !join or a letter answer. Every game is free to run for as long as the stream lasts. Pro adds live AI on top: race commentary that reacts to what just happened, quiz questions written on the streamer’s theme, and a boss that talks back to chat.',
    ],
    highlights: [
      {
        title: 'One URL, every game',
        description: 'A single Browser Source in OBS. Switch games from the dashboard mid-stream.',
      },
      {
        title: 'Viewers never sign up',
        description: 'Chat plays by typing commands. Nothing to install or sign up for.',
      },
      {
        title: 'Free, no time limit',
        description: 'Every game is free to run, with no daily cap and no card required.',
      },
      {
        title: 'Live AI on Pro',
        description: 'Commentary, themed trivia and boss dialogue, written live from what chat does.',
      },
    ],
    model:
      'Every game is free to run. Pro is $9/month or $79/year, with AI included and no credit meter. StreamerGames takes no cut of a streamer’s revenue.',
    facts: ['Live since September 2026', 'Free to run · Pro $9/month', 'Six games, one OBS source'],
    decisions: [
      {
        title: 'Free means the whole stream',
        body: 'At least one popular rival caps free play at 60 minutes a day. We don’t put a clock on the free plan. Pro pays for the things that cost us money to run, like live AI and saved leaderboards.',
      },
      {
        title: 'One URL instead of one per game',
        body: 'Streamers already juggle scenes. Every game lives behind the same Browser Source, so setup happens once and switching games mid-stream never means touching OBS.',
      },
      {
        title: 'A watermark you can type',
        body: 'An overlay can’t be clicked, so the free plan’s small mark shows streamergames.io/try, an address a viewer can read straight off a clip.',
      },
      {
        title: 'No credit meter on AI',
        body: 'Pro includes the AI features outright. Streamers shouldn’t have to watch a balance tick down in the middle of a stream.',
      },
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Claude API', 'Twitch chat', 'Vercel'],
    hero: {
      src: '/apps/streamergames/screen-desktop.jpg',
      alt: 'The StreamerGames home page: “Your chat plays. You just go live.” beside a live Duck Derby demo',
      width: 2880,
      height: 1800,
    },
    galleryTitle: 'The six games',
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
      'A free request board for homeowners around Watertown and Jefferson County, Wisconsin. You describe the job once, it goes to local contractors, and each of them quotes their own price.',
    problem: [
      'When a homeowner needs a plumber or a roofer, they usually fall back on a Google search or a neighbour’s guess, then spend an afternoon calling around.',
      'Small contractors have the opposite problem. They want steady local work but can’t afford to keep paying for advertising to find it.',
    ],
    approach: [
      'A homeowner picks a trade, describes the job and their town, and the request goes to matching local pros by email. The pros reply with their own pricing. One request replaces an afternoon of phone calls.',
      'It’s built around how people search. Each trade and each town it serves has its own page, so a search for “plumber in Watertown” lands somewhere useful. Contractors join free.',
    ],
    highlights: [
      {
        title: 'One request instead of ten calls',
        description: 'Describe the job once. Matching local pros get it by email.',
      },
      {
        title: 'Free for homeowners',
        description: 'No fees, no subscription, no cut of the job.',
      },
      {
        title: 'Local to Jefferson County',
        description: 'Watertown, Jefferson, Fort Atkinson, Lake Mills, Oconomowoc and nearby towns.',
      },
      {
        title: 'Eight trades',
        description: 'Plumbing, electrical, HVAC, landscaping, roofing, painting, handyman, and cleaning.',
      },
    ],
    model: 'Always free for homeowners. Contractors join free.',
    facts: ['Live in Jefferson County, WI', 'Free for homeowners', 'Eight trades covered'],
    decisions: [
      {
        title: 'We don’t promise what we can’t check',
        body: 'You won’t find “vetted pros” or “free quotes” on HomeHelpersCo. We can’t guarantee either, so the site doesn’t claim them. Each pro sets their own price.',
      },
      {
        title: 'A page for every trade and town',
        body: 'Most homeowners start with a Google search. Separate pages for each trade and town mean “roofer in Lake Mills” finds a page that is actually about roofing in Lake Mills.',
      },
      {
        title: 'Start in one county',
        body: 'A request board only works when there are pros on the other end. So it covers Jefferson County, where we’re based, and grows town by town instead of spreading thin across the state.',
      },
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Resend', 'Tailwind CSS', 'Vercel'],
    hero: {
      src: '/apps/homehelpersco/screen-desktop.png',
      alt: 'The HomeHelpersCo home page: “Tell us the job. We’ll send it to local pros.” beside a sample work order',
      width: 1440,
      height: 900,
    },
  },
];

export const getApp = (id: string): App | undefined => apps.find((app) => app.id === id);
