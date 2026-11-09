import type { Metadata } from 'next';
import AuroraBackground from '@/components/AuroraBackground';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import AppShowcase from '@/components/AppShowcase';
import CtaBand from '@/components/CtaBand';
import Button from '@/components/Button';
import { apps } from '@/data/apps';
import { CONSULT_HREF } from '@/data/solutions';

const description =
  'The apps Ascella Studios builds and runs: StreamerGames, the chat-game arcade for Twitch streams, and HomeHelpersCo, a local request board for Wisconsin homeowners.';

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
      <section className="relative overflow-hidden py-20 sm:py-28">
        <AuroraBackground variant="subtle" />
        <Container className="relative z-10">
          <SectionHeading
            as="h1"
            eyebrow="Apps"
            title={
              <>
                Built, launched, and <span className="text-gradient">run by us</span>
              </>
            }
            description="Consumer software in any form it needs to take: SaaS, web platforms, and mobile. Each one starts with one real problem and stays focused on it."
          />
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="space-y-24 lg:space-y-32">
            {apps.map((app, i) => (
              <AppShowcase key={app.id} app={app} flip={i % 2 === 1} priority={i === 0} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Want something built with the same care?"
        description="Ascella Solutions builds websites and landing pages for small businesses, and gives practical advice on software ideas."
      >
        <Button variant="gradient" href={CONSULT_HREF}>
          Book a free consult
        </Button>
        <Button variant="outline" href="/solutions">
          About Ascella Solutions
        </Button>
      </CtaBand>
    </div>
  );
}
