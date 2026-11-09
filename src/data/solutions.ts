import type { IconName } from '@/components/icons';

// Ascella Solutions: websites and consulting, mostly for small businesses.
// Agent and automation work belongs to Frontier Forge Technologies. Send
// those enquiries to frontierforge.tech rather than listing them here.

export const FFT_URL = 'https://frontierforge.tech';

/** Contact form link with the Solutions topic preselected. */
export const CONSULT_HREF = '/contact?topic=solutions';

export interface Service {
  id: string;
  icon: IconName;
  title: string;
  summary: string;
  includes: string[];
}

export const services: Service[] = [
  {
    id: 'websites',
    icon: 'globe',
    title: 'Website builds',
    summary:
      'New sites and redesigns for businesses that have outgrown a template, or never had a site at all. Fast, mobile-first, and built to turn visitors into calls and enquiries.',
    includes: [
      'Mobile-first design that loads fast',
      'Local search basics: page titles, structured data, Google Business Profile',
      'Contact forms that land in your inbox',
      'Domain, hosting, and launch handled for you',
    ],
  },
  {
    id: 'landing-pages',
    icon: 'layout',
    title: 'Landing pages',
    summary:
      'One focused page for a launch, an offer, an event, or an ad campaign, with one clear thing for the visitor to do.',
    includes: [
      'A single, clear call to action',
      'Copy written with you, not lorem ipsum',
      'Sign-up or enquiry form connected to your tools',
      'Built to be updated as the campaign changes',
    ],
  },
  {
    id: 'consulting',
    icon: 'chat',
    title: 'Consulting',
    summary:
      'Plain-spoken advice from people who build and run their own software. Bring a website that isn’t working, an app idea, or a pile of tools that don’t talk to each other.',
    includes: [
      'Website and online-presence reviews',
      'Choosing tools and platforms that fit your budget',
      'Planning an app or software idea before you spend on it',
      'A written summary you can act on, with or without us',
    ],
  },
];

export const process = [
  {
    title: 'Free consult',
    description:
      'A short call about your business, what’s working, and what isn’t. No pitch deck, no pressure.',
  },
  {
    title: 'Plan & quote',
    description:
      'You get a written plan and a quote before any work starts, so you know exactly what you’re paying for.',
  },
  {
    title: 'Build & launch',
    description:
      'We build it, you review it along the way, and we launch it together. You own your domain, content, and accounts.',
  },
];

export const audiences = [
  'Shops and restaurants',
  'Trades and home services',
  'Studios and salons',
  'Clinics and practices',
  'Nonprofits and clubs',
  'Founders with an idea',
];

export const faqs = [
  {
    q: 'How much does a website cost?',
    a: 'It depends on what you need. After the free consult you get a written quote before any work starts, and nothing is billed until you agree to it.',
  },
  {
    q: 'Do I need to be local?',
    a: 'No. We’re based in Watertown, Wisconsin, and work with businesses anywhere over video calls and email.',
  },
  {
    q: 'Can you help with automation or AI agents?',
    a: 'That’s the speciality of our parent company, Frontier Forge Technologies. Tell us what you need and we’ll point you to the right people, or reach them directly at frontierforge.tech.',
  },
  {
    q: 'I have an app idea. Is that a fit?',
    a: 'Yes, for consulting. We build and run our own apps, so we can help you work out what to build first, what it might cost, and what to avoid.',
  },
];
