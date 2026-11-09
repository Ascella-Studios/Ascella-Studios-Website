import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import AppShowcase from '@/components/AppShowcase';
import { apps } from '@/data/apps';

const description =
  'The apps Ascella Studios builds and runs: StreamerGames, a chat-game arcade for Twitch streams, and HomeHelpersCo, a request board for homeowners in Jefferson County, Wisconsin.';

export const metadata: Metadata = {
  title: 'Apps',
  description,
  openGraph: {
    title: 'Apps by Ascella Studios',
    description,
    url: 'https://ascellastudios.com/apps',
  },
  alternates: { canonical: '/apps' },
};

export default function AppsPage() {
  return (
    <div className="bg-background">
      <section className="pt-16 sm:pt-24 pb-14 border-b border-border">
        <Container>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight max-w-3xl leading-[1.05]">
            The apps we build and run
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
            Two products, both live, both maintained by the people who built them. Each page covers
            the problem, what we built, and the decisions behind it.
          </p>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="space-y-24 lg:space-y-32">
            {apps.map((app, i) => (
              <AppShowcase key={app.id} app={app} flip={i % 2 === 1} priority={i === 0} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 border-t border-border bg-card/50">
        <Container>
          <p className="text-foreground/70">
            Want something like this for your business?{' '}
            <Link href="/solutions" className="text-accent font-medium hover:underline">
              See Ascella Solutions
            </Link>
            .
          </p>
        </Container>
      </section>
    </div>
  );
}
