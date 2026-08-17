import type { Metadata } from 'next';
import Link from 'next/link';
import AuroraBackground from '@/components/AuroraBackground';
import Container from '@/components/Container';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Ascella Studios is the consumer apps arm of Frontier Forge Technologies, building small, carefully crafted apps for everyday life—focused, fast, and honest.',
  openGraph: {
    title: 'About Ascella Studios',
    description:
      'Ascella Studios is the consumer apps arm of Frontier Forge Technologies, building small, carefully crafted apps for everyday life—focused, fast, and honest.',
    url: 'https://ascellastudios.com/about',
  },
};

const steps = [
  {
    title: 'Discover',
    description:
      'Start by deeply understanding the problem. What are people actually struggling with? What’s the real pain point? Ask questions, research, and listen.',
  },
  {
    title: 'Design',
    description:
      'With a clear understanding, craft a thoughtful solution. Every interaction, every screen, every detail is intentionally designed for the best experience.',
  },
  {
    title: 'Deliver',
    description:
      'Build with precision, test thoroughly, and refine until it’s right. Launch is just the beginning—then keep improving based on real usage.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
        <AuroraBackground variant="subtle" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/50 mb-8">
              The consumer apps arm of Frontier Forge Technologies
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              A small studio with <span className="text-gradient">big standards</span>
            </h1>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              Ascella Studios makes small, carefully crafted apps for everyday
              life. We&apos;re part of Frontier Forge Technologies, and we hold
              every screen to the same bar: focused, fast, and honest.
            </p>
            <Button variant="primary" href="/#follow">
              Follow the Build
            </Button>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <Container size="sm">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            The Story
          </h2>
          <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
            <p>
              Ascella Studios started from a simple frustration: too much
              software is built to check boxes or chase trends, and not
              enough is built because someone genuinely cared about the
              problem. Ascella exists to build the second kind. As the
              consumer apps arm of Frontier Forge Technologies, our whole job
              is software for everyday life&mdash;done properly.
            </p>
            <p>
              We&apos;re at the very beginning. The first app is being built
              right now, and there&apos;s no portfolio of past launches to
              point at&mdash;just a clear idea of how software should feel:
              focused, fast, and honest. If you want to see whether we live
              up to that, the best way is to{' '}
              <Link href="/#follow" className="text-sky hover:underline">
                follow the build
              </Link>
              .
            </p>
            <p>
              The name &quot;Ascella&quot; comes from a star in the
              constellation Sagittarius, but it also evokes ascending&mdash;
              rising up, elevating. That&apos;s the mission: build tools that
              help people reach a little higher.
            </p>
          </div>
        </Container>
      </section>

      {/* How We Work Section */}
      <section className="py-16 lg:py-24 border-y border-border bg-card/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              The process is built around understanding, crafting, and refining until it&apos;s right.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl border border-border bg-background p-8 hover:border-sky/50 transition-colors h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-sm text-sky/60 select-none">
                    0{i + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <Container size="sm" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Follow the Build
          </h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto text-lg">
            The first app is in development now. Leave your email and
            you&apos;ll get one message when it ships&mdash;no spam, no drip
            campaign.
          </p>
          <Button variant="gradient" href="/#follow" className="px-8">
            Leave Your Email
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
          <p className="text-foreground/50 text-sm mt-6">
            Or just want to talk?{' '}
            <Link href="/contact" className="text-sky hover:underline">
              Get in touch
            </Link>
            .
          </p>
        </Container>
      </section>
    </div>
  );
}
