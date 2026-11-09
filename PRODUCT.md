# Product

## Identity
Name: ascella-studios-website
Repository: Ascella-Studios/Ascella-Studios-Website
Description: Marketing website for Ascella Studios, the consumer apps studio of Frontier Forge Technologies. It showcases Ascella's products (StreamerGames, HomeHelpersCo) and sells Ascella Solutions: website builds and consulting for small businesses.

## Status
Live at https://ascellastudios.com

## Stack
Frontend: Next.js 16 (App Router), TypeScript, Tailwind CSS 4
Backend: Next.js route handlers (/api/contact, /api/waitlist)
Database: none (contacts and signups go to HubSpot)
Infrastructure: Vercel

## Deployment
Provider: Vercel (auto-deploys on merge to main)
Staging: Vercel preview deployment per pull request
Production: https://ascellastudios.com

## Monitoring
Provider:
Health check: TODO (cc onboard): fill this in.
Alerts:

## Agents
Research: Hermes (Grok) via `cc research`
Engineering: Claude Code via `cc issue-to-pr`
Operations: `cc monitor`, `cc preflight`
Local AI: Ollama, for `local-ok` / `size:S` issues

## Permissions
Repository read: yes
Repository write: yes, through the Command Center loop; every PR is reviewed
Production read: TODO (cc onboard): fill this in.
Production write: no
Database read: TODO (cc onboard): fill this in.
Database write: no

## Command Center
This repository is worked through the AI Command Center loop. Issues labelled `ai-ready` are picked
up by an agent, which clones the repository, makes the change on a branch, and opens a pull request.
Every pull request is reviewed by a human before it is merged; no agent merges or deploys on its own.

## Approval Policy
Production deployment: owner approval required
Destructive actions: owner approval required
External communications: owner approval required
Permission changes: owner approval required

## Important Constraints
- Ascella is "the consumer apps studio of Frontier Forge Technologies". Copy must not imply a finished legal subsidiary structure.
- Ascella Solutions is websites and consulting only. Agent and automation work goes to Frontier Forge (frontierforge.tech).
- Every claim must be true today: no invented traction, users, or "coming soon" products. HomeHelpersCo copy never promises free quotes or vetted contractors.
- Internal tool names never appear on public pages (enforced by tests/site-content.test.mjs).
