import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AuroraBackground from '@/components/AuroraBackground';
import Container from '@/components/Container';
import Button from '@/components/Button';
import CtaBand from '@/components/CtaBand';
import { Icon } from '@/components/icons';
import { CONSULT_HREF, FFT_URL } from '@/data/solutions';

const description =
  'Ascella Studios is the consumer apps studio of Frontier Forge Technologies. We build and run StreamerGames and HomeHelpersCo, and help small businesses through Ascella Solutions.';

export const metadata: Metadata = {
  title: 'About',
  description,
  openGraph: {
    title: 'About Ascella Studios',
    description,
    url: 'https://ascellastudios.com/about',
  },
  alternates: { canonical: '/about' },
};

const family = [
  {
    name: 'Frontier Forge Technologies',
    role: 'Parent company',
    description: 'AI agents, automation, and software for businesses.',
    href: FFT_URL,
    external: true,
  },
  {
    name: 'Ascella Studios',
    role: 'Consumer apps',
    description: 'Our own products, plus websites and consulting through Ascella Solutions.',
    href: '/',
    current: true,
  },
  {
    name: 'GPM',
    role: 'Media · In development',
    description: 'Frontier Forge’s media arm, being set up to document the work.',
    href: `${FFT_URL}/gpm.html`,
    external: true,
  },
];

const steps = [
  {
    title: 'Start with one real problem',
    description:
      'Before anything is designed, we find out what people actually struggle with, and whether software is even the answer.',
  },
  {
    title: 'Ship something small that works',
    description:
      'A focused first version in real hands beats a big plan on paper. Then we keep improving it based on how it’s used.',
  },
  {
    title: 'Keep it running',
    description:
      'Launch is the beginning. We host, monitor, and maintain what we build, so it stays fast and keeps working.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
        <AuroraBackground variant="subtle" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="eyebrow mb-6">About Ascella</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
              A small studio with <span className="text-gradient">big standards</span>
            </h1>
            <p className="mt-6 text-xl text-foreground/70 leading-relaxed">
              Ascella Studios is the consumer apps studio of Frontier Forge Technologies. We build
              and run our own software for everyday life, and help small businesses get online
              through Ascella Solutions.
            </p>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <Container size="sm">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-8">The story</h2>
          <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
            <p>
              Ascella started in 2026 from a simple frustration: too much software is built to
              check boxes or chase trends, and not enough is built because someone cared about the
              problem. We wanted to build the second kind, and to build it properly.
            </p>
            <p>
              Since then we’ve launched two products.{' '}
              <Link href="/apps/streamergames" className="text-accent hover:underline">
                StreamerGames
              </Link>{' '}
              gives Twitch chat something to do: a chat-game arcade that runs as a single OBS
              source.{' '}
              <Link href="/apps/homehelpersco" className="text-accent hover:underline">
                HomeHelpersCo
              </Link>{' '}
              turns ten phone calls into one request, connecting Wisconsin homeowners with local
              contractors. We build them, launch them, and run them ourselves.
            </p>
            <p>
              Today Ascella is the consumer side of{' '}
              <a href={FFT_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Frontier Forge Technologies
              </a>
              . Frontier Forge builds AI agents and automation for businesses. Ascella builds our
              own products and, through{' '}
              <Link href="/solutions" className="text-accent hover:underline">
                Ascella Solutions
              </Link>
              , brings the same care to websites and advice for small businesses.
            </p>
            <p>
              The name comes from Ascella, a star in the constellation Sagittarius, and it echoes
              <em> ascend</em>. The goal is the same as the tagline: build things that lift people
              up.
            </p>
          </div>
        </Container>
      </section>

      {/* Founder */}
      <section className="py-16 lg:py-24 border-t border-border bg-card/50">
        <Container size="md">
          <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center">
            <Image
              src="/team/jared.jpg"
              alt="Jared Klopstein"
              width={383}
              height={351}
              className="size-40 md:size-52 rounded-2xl object-cover border border-border mx-auto md:mx-0"
            />
            <div className="text-center md:text-left">
              <p className="eyebrow mb-3">Founder</p>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">Jared Klopstein</h2>
              <p className="mt-1 text-foreground/60">
                Founder, Ascella Studios · Founding member, Frontier Forge Technologies
              </p>
              <p className="mt-5 text-foreground/70 text-lg leading-relaxed">
                Jared started Ascella in Watertown, Wisconsin to make a few things genuinely well
                instead of many things halfway. He leads product and engineering across the
                studio&rsquo;s apps and works directly with Ascella Solutions clients.
              </p>
              <a
                href={`${FFT_URL}/#company`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                Meet the Frontier Forge founding team
                <Icon name="arrowUpRight" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Family */}
      <section className="py-16 lg:py-24 border-t border-border">
        <Container>
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">The family</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Where Ascella fits</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {family.map((member) => {
              const card = (
                <>
                  <p className="text-xs font-mono uppercase tracking-wider text-foreground/50">{member.role}</p>
                  <h3 className="mt-3 text-xl font-semibold text-foreground flex items-center gap-2">
                    {member.name}
                    {member.external && <Icon name="arrowUpRight" className="w-4 h-4 text-foreground/40" />}
                  </h3>
                  <p className="mt-2 text-foreground/70 leading-relaxed">{member.description}</p>
                </>
              );
              const classes = `block h-full rounded-2xl border p-8 transition-colors ${
                member.current
                  ? 'border-sky/50 bg-sky/5'
                  : 'border-border bg-card hover:border-sky/50'
              }`;
              return member.current ? (
                <div key={member.name} className={classes} aria-current="page">
                  {card}
                </div>
              ) : (
                <a key={member.name} href={member.href} target="_blank" rel="noopener noreferrer" className={classes}>
                  {card}
                </a>
              );
            })}
          </div>
        </Container>
      </section>

      {/* How we work */}
      <section className="py-16 lg:py-24 border-t border-border bg-card/50">
        <Container>
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">How we work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Same process, whoever it’s for
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="rounded-2xl border border-border bg-background p-8">
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="See what we’ve built, or start something new."
        description="Take a look at our apps, or book a free consult about your own project."
      >
        <Button variant="primary" href="/apps">
          See our apps
        </Button>
        <Button variant="outline" href={CONSULT_HREF}>
          Book a free consult
        </Button>
      </CtaBand>
    </div>
  );
}
