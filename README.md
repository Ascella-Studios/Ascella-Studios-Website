# Ascella Studios Website

Marketing website for [Ascella Studios](https://ascellastudios.com), the consumer apps studio of
[Frontier Forge Technologies](https://frontierforge.tech).

The site has two lanes:

- **Apps**: products Ascella builds and runs, currently [StreamerGames](https://streamergames.io) and
  [HomeHelpersCo](https://www.homehelpersco.com). Each one gets a case study at `/apps/{id}`.
- **Ascella Solutions** (`/solutions`): website builds, landing pages, and consulting for small
  businesses. Agent and automation work belongs to Frontier Forge, and the site points people there.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS 4
- next-themes (dark/light mode)
- HubSpot (contact form + email signups)
- Deployed on Vercel (auto-deploys on push to `main`)

## Getting Started

```bash
npm install
cp .env.local.example .env.local   # add your HubSpot private app token
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other commands: `npm run build` (production build), `npm run lint` (ESLint), `npm test` (run after
`npm run build`; some tests read the build output). Tests import `.ts` files directly, so they need
Node 22.18+ or 23.6+.

## Structure

- `src/app/`: pages (home, apps, apps/[id], solutions, about, contact, privacy, terms, 404)
- `src/data/apps.ts`: the app catalog. It drives the home page, `/apps`, the case studies, the footer,
  and the sitemap. Images live in `public/apps/{id}/`.
- `src/data/solutions.ts`: Ascella Solutions offers and starting prices, process, FAQ, phone and email
- `src/lib/waitlist.ts`: HubSpot lists that `/api/waitlist` accepts
- `src/lib/contact.ts`: contact form topics (`/contact?topic=solutions` preselects one)
- `src/app/[appname]/privacy|terms`: dynamic per-app legal pages, served from `legal/{appname}/*.html`
- `src/app/waitlist/`: per-app waitlist landing pages (empty between launches)
- `src/components/Waitlist.tsx`: reusable email-capture component (HubSpot static segments)

## ⚠️ Automation Contract

The Ascella app starter kit deploys files **into this repo** at app-submission time:

1. `legal/{appname}/privacy.html` + `terms.html` → served by the dynamic legal routes
2. A generated waitlist page → `src/app/waitlist/{appname}/page.tsx`
3. Commits and pushes (Vercel auto-deploys)

Generated pages depend on `Waitlist.tsx`'s prop API, `/api/waitlist`, and the
`text-foreground` / `bg-background` / `border-border` design tokens. Don't
rename or remove these. **New:** `/api/waitlist` only accepts registered list
IDs. A new app's HubSpot list ID must be added to `src/lib/waitlist.ts`, or to
the `WAITLIST_EXTRA_LIST_IDS` env var in Vercel, or its signups get a 400. `legal/` and `src/app/waitlist/` are empty between
launches by design; each contains a README with details.

## HubSpot

- Contact form creates/updates a contact and attaches the message, with its topic, as a Note
- The studio-updates signup (home page) adds contacts to the **Ascella Updates** static segment (ILS ID 13)
- Required token scopes are listed in `.env.local.example`
