import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { Icon } from '@/components/icons';
import { FFT_URL } from '@/data/solutions';

const description =
  'Ascella Studios is the consumer apps studio of Frontier Forge Technologies, founded by Jared Klopstein in Watertown, Wisconsin.';

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
    description: 'Builds AI agents, automation and custom software for businesses.',
    href: FFT_URL,
  },
  {
    name: 'Ascella Studios',
    role: 'Consumer apps',
    description: 'Our own products, plus websites and consulting through Ascella Solutions.',
    current: true,
  },
  {
    name: 'GPM',
    role: 'Media, in development',
    description: 'Frontier Forge’s media arm, being set up to document the work.',
    href: `${FFT_URL}/gpm.html`,
  },
];

const commitments = [
  {
    title: 'Free means free',
    body: 'If something we make is free, we don’t quietly cap it or hide the useful part behind a paywall later.',
  },
  {
    title: 'Cancelling isn’t a maze',
    body: 'Any paid plan we sell can be cancelled by you, from your account. Nobody has to email us and ask.',
  },
  {
    title: 'We only claim what we can back up',
    body: 'No invented numbers, no badges we can’t verify, no promises our products don’t keep.',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="pt-16 sm:pt-24 pb-16 border-b border-border">
        <Container>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight max-w-3xl leading-[1.05]">
            A studio in Watertown, Wisconsin
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed">
            Ascella Studios builds consumer software and keeps it running. It&rsquo;s the consumer
            apps side of Frontier Forge Technologies.
          </p>
        </Container>
      </section>

      {/* Story + founder */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-12 gap-14">
            <div className="lg:col-span-7 space-y-6 text-foreground/75 text-lg leading-relaxed">
              <p>
                Jared Klopstein started Ascella in early 2026 to build apps. The first months were
                mostly experiments, and a couple of them turned into{' '}
                <Link href="/apps" className="text-foreground underline decoration-border underline-offset-4 hover:text-accent">
                  products that are live today
                </Link>
                .
              </p>
              <p>
                Along the way Jared co-founded{' '}
                <a href={FFT_URL} target="_blank" rel="noopener noreferrer" className="text-foreground underline decoration-border underline-offset-4 hover:text-accent">
                  Frontier Forge Technologies
                </a>{' '}
                with Daniel Berry and Dylan Gaffney. Frontier Forge builds AI agents and automation
                for businesses. Ascella became its consumer side: our own apps, plus{' '}
                <Link href="/solutions" className="text-foreground underline decoration-border underline-offset-4 hover:text-accent">
                  Ascella Solutions
                </Link>
                , which builds websites for small businesses.
              </p>
              <p>The name is a star in Sagittarius.</p>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card p-7 lg:sticky lg:top-24">
                <Image
                  src="/team/jared.jpg"
                  alt="Jared Klopstein"
                  width={383}
                  height={351}
                  className="size-24 rounded-xl object-cover"
                />
                <h2 className="mt-5 text-2xl font-bold text-foreground tracking-tight">Jared Klopstein</h2>
                <p className="text-foreground/60">Founder, Ascella Studios</p>
                <p className="text-foreground/60">Co-founder, Frontier Forge Technologies</p>
                <p className="mt-5 text-foreground/75 leading-relaxed">
                  Jared designs and builds Ascella&rsquo;s products. If you hire Ascella Solutions,
                  he&rsquo;s the person you&rsquo;ll talk to.
                </p>
                <a
                  href={`${FFT_URL}/#company`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                  The Frontier Forge team
                  <Icon name="arrowUpRight" className="w-4 h-4" />
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Commitments */}
      <section className="py-20 lg:py-24 border-t border-border bg-card/50">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">What we hold ourselves to</h2>
          <p className="mt-3 text-lg text-foreground/70 max-w-2xl">
            Every studio has values on its About page. These are the ones you can hold us to.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {commitments.map((c) => (
              <div key={c.title} className="border-t border-foreground/20 pt-6">
                <h3 className="text-xl font-semibold text-foreground">{c.title}</h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Family */}
      <section className="py-20 lg:py-24 border-t border-border">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-10">Where Ascella fits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {family.map((member) => {
              const inner = (
                <>
                  <p className="text-sm text-foreground/50">{member.role}</p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground flex items-center gap-2">
                    {member.name}
                    {member.href && <Icon name="arrowUpRight" className="w-4 h-4 text-foreground/40" />}
                  </h3>
                  <p className="mt-2 text-foreground/70 leading-relaxed">{member.description}</p>
                </>
              );
              return member.href ? (
                <a
                  key={member.name}
                  href={member.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full rounded-2xl border border-border bg-card p-7 hover:border-sky/50 transition-colors"
                >
                  {inner}
                </a>
              ) : (
                <div key={member.name} className="h-full rounded-2xl border border-sky/50 bg-sky/5 p-7">
                  {inner}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-14 border-t border-border bg-card/50">
        <Container>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="primary" href="/apps">
              See the apps
            </Button>
            <Button variant="outline" href="/solutions">
              Need a website?
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
