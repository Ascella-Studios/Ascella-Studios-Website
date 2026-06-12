# Waitlist Pages

⚠️ **Do not delete this directory** — it is an automation deploy target.

The Ascella app starter kit (Phase 10 / store-automator) copies each app's
generated `docs/waitlist-page.tsx` to `src/app/waitlist/{appname}/page.tsx`
at submission time. Generated pages depend on:

- `@/components/Waitlist` and its prop API (listId, source, title,
  description, buttonText, successMessage, variant)
- `/api/waitlist`
- The design tokens `text-foreground`, `bg-background`, `border-border`

This directory is empty between launches — that's expected.
(A README is not a route file, so it has no effect on the App Router.)
