# Ascella Studios Website

Marketing website for [Ascella Studios](https://ascellastudios.com) — an independent, one-person app studio making small, carefully built apps for everyday life.

The studio is pre-launch (no shipped apps yet), so the site is intentionally small: home, about, and contact, plus infrastructure that activates when the first app ships.

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

Other commands: `npm run build` (production build), `npm run lint` (ESLint).

## Structure

- `src/app/` — pages (home, about, contact, privacy, terms, 404)
- `src/app/[appname]/privacy|terms` — dynamic per-app legal pages, served from `legal/{appname}/*.html`
- `src/app/waitlist/` — per-app waitlist landing pages (empty until launch)
- `src/components/Waitlist.tsx` — reusable email-capture component (HubSpot static segments)
- `src/data/apps.ts` — app catalog (empty until the first app ships)

## ⚠️ Automation Contract

The Ascella app starter kit deploys files **into this repo** at app-submission time:

1. `legal/{appname}/privacy.html` + `terms.html` → served by the dynamic legal routes
2. A generated waitlist page → `src/app/waitlist/{appname}/page.tsx`
3. Commits and pushes (Vercel auto-deploys)

Generated pages depend on `Waitlist.tsx`'s prop API, `/api/waitlist`, and the
`text-foreground` / `bg-background` / `border-border` design tokens — don't
rename or remove these. `legal/` and `src/app/waitlist/` are empty between
launches by design; each contains a README with details.

## HubSpot

- Contact form creates/updates a contact and attaches the message as a Note
- "Follow the Build" signup (home page) adds contacts to the **Ascella Updates** static segment (ILS ID 13)
- Required token scopes are listed in `.env.local.example`
