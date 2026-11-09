import type { IconName } from '@/components/icons';

// Ascella Solutions: websites and consulting, mostly for small businesses.
// Written in Jared's voice: the person a small business actually deals with.
// Agent and automation work belongs to Frontier Forge Technologies. Send
// those enquiries to frontierforge.tech rather than listing them here.

export const FFT_URL = 'https://frontierforge.tech';

/** Contact form link with the Solutions topic preselected. */
export const CONSULT_HREF = '/contact?topic=solutions';

export const PHONE_DISPLAY = '(920) 941-4455';
export const PHONE_HREF = 'tel:+19209414455';
export const EMAIL = 'hello@ascellastudios.com';

export interface Offer {
  id: string;
  icon: IconName;
  title: string;
  /** e.g. "From $2,500". Must be a real, current price. Set Nov 2026 from
   *  research into Wisconsin small-business web pricing (Madison, Milwaukee,
   *  Green Bay studios start at roughly $1,000 to $2,400 for a small site). */
  price: string;
  priceNote: string;
  summary: string;
  includes: string[];
}

export const offers: Offer[] = [
  {
    id: 'websites',
    icon: 'globe',
    title: 'Website',
    price: 'From $1,500',
    priceNote: 'Most small-business sites land between $1,500 and $3,500.',
    summary:
      'A new site, or a rebuild of one that’s gotten embarrassing. Designed and built from scratch for your business.',
    includes: [
      'Looks right and loads fast on phones',
      'Set up so Google can find it, including your Business Profile',
      'A contact form that emails you',
      'I register the domain, set up hosting, and launch it',
    ],
  },
  {
    id: 'landing-pages',
    icon: 'layout',
    title: 'Landing page',
    price: 'From $600',
    priceNote: 'Most land between $600 and $1,200.',
    summary:
      'One page for one purpose: a grand opening, a seasonal offer, an event, or an ad you’re paying for. Everything on it points at one next step.',
    includes: [
      'Written with you, in your words',
      'A sign-up or enquiry form that goes where you need it',
      'Easy to change when the offer changes',
    ],
  },
  {
    id: 'consulting',
    icon: 'chat',
    title: 'Consulting',
    price: '$100/hour',
    priceNote: 'Billed by the hour. The first call is free.',
    summary:
      'For when you need a second opinion more than a new website. Bring a site that isn’t bringing in work, a software bill that keeps growing, or an app idea you want to pressure-test.',
    includes: [
      'A review of your website or online presence',
      'Help choosing tools that fit your budget',
      'A reality check on an app idea before you pay anyone to build it',
      'Notes you can act on, whether or not you hire me',
    ],
  },
];

export const process = [
  {
    title: 'We talk',
    description:
      'A free call, about 30 minutes. You tell me about the business and what you want the website to do. I’ll tell you honestly if you need me.',
  },
  {
    title: 'You get a quote',
    description:
      'A written plan and a fixed price before anything starts. If it doesn’t work for you, that’s the end of it.',
  },
  {
    title: 'I build it, you sign off',
    description:
      'You see it as it comes together and nothing launches until you’re happy. The domain, the content and the accounts are in your name.',
  },
];

export const faqs = [
  {
    q: 'What does a website cost?',
    a: 'The prices above are where projects start. After our call you get a fixed quote in writing, and you don’t pay anything until you’ve agreed to it.',
  },
  {
    q: 'Is hosting included?',
    a: 'The build price covers setting it up. The domain and hosting are registered in your name and billed to you directly, so you’re never locked in to me.',
  },
  {
    q: 'Do I have to be in Watertown?',
    a: 'No. Local businesses can meet in person if they like. Everyone else gets the same thing over video calls and email.',
  },
  {
    q: 'Can you set up automation or AI for my business?',
    a: 'That’s what our parent company, Frontier Forge Technologies, does. I’ll introduce you, or you can reach them directly at frontierforge.tech.',
  },
  {
    q: 'I have an idea for an app. Can you help?',
    a: 'Yes, through consulting. I build and run apps myself, so I can help you work out what to build first, roughly what it would cost, and where people usually waste money.',
  },
];
