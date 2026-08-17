import Link from 'next/link';
import Waitlist from '@/components/Waitlist';
import AuroraBackground from '@/components/AuroraBackground';
import Container from '@/components/Container';
import Button from '@/components/Button';

const ASCELLA_UPDATES_LIST_ID = '13';

const beliefs = [
  {
    title: 'Do one thing well.',
    description:
      'The best apps solve one real problem completely instead of ten problems halfway. No bloated menus, no features nobody asked for.',
  },
  {
    title: 'Fast is a feature.',
    description:
      'Every screen should load before you wonder if it’s broken. Speed is respect for your time, and we treat it that way.',
  },
  {
    title: 'Honest by default.',
    description:
      'No dark patterns, no guilt-trip popups, no subscriptions that hide the cancel button. Software should earn its place on your phone.',
  },
  {
    title: 'Small is a strength.',
    description:
      'A small team that sweats every detail beats a committee shipping compromises. Nothing here gets built by quota—every screen has someone’s name on it.',
  },
];

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center relative overflow-hidden">
        <AuroraBackground />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 flex-1 flex items-center">
          <div className="text-center w-full">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/50 mb-6">
              The consumer apps arm of Frontier Forge Technologies
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight">
              Apps that <span className="text-gradient">elevate</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              We make small, carefully built apps for everyday life&mdash;software
              that solves real problems, loads fast, and doesn&apos;t make you
              want to throw your phone. The first one is in the works, and one
              email gets you launch day.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="#follow">
                Follow the Build
              </Button>
              <Button variant="outline" href="/contact">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <a
            href="#beliefs"
            className="text-foreground/50 hover:text-foreground/70 transition-colors"
            aria-label="Scroll to explore"
          >
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* What We Believe */}
      <section id="beliefs" className="py-24 lg:py-32 scroll-mt-24">
        <Container size="sm">
          <h2 className="text-sm font-semibold text-sky tracking-wider uppercase mb-12">
            What we believe
          </h2>
          <div className="space-y-10">
            {beliefs.map((belief, i) => (
              <div key={belief.title} className="flex gap-6 border-t border-border pt-10">
                <span className="font-mono text-sm text-sky/60 pt-2 select-none">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {belief.title}
                  </h3>
                  <p className="text-foreground/70 text-lg leading-relaxed">
                    {belief.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Follow the Build */}
      <section id="follow" className="py-24 lg:py-32 border-y border-border bg-card/50 scroll-mt-24">
        <Container size="md">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-semibold text-sky tracking-wider uppercase mb-4">
                In the works
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                We&apos;re building our first app right now.
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                No fake hype, no vaporware&mdash;one app, built with care, shipping
                when it&apos;s right. Leave your email and you get exactly one
                message on launch day, plus a few honest updates from the
                workbench in between.
              </p>
            </div>
            <Waitlist
              listId={ASCELLA_UPDATES_LIST_ID}
              source="follow-the-build"
              title="Follow the Build"
              description="One email when our first app ships. A few honest updates in between. No spam, ever."
              buttonText="Get the Launch Email"
              successMessage="You're in. We'll write when there's something real to show."
            />
          </div>
        </Container>
      </section>

      {/* Made by People Who Care */}
      <section className="py-24 lg:py-32">
        <Container size="sm" className="text-center">
          <h2 className="text-sm font-semibold text-sky tracking-wider uppercase mb-12">
            Made by people who care
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Real people, sweating real details.
          </h3>
          <p className="text-foreground/70 text-lg leading-relaxed max-w-xl mx-auto mb-6">
            Ascella is the consumer apps arm of Frontier Forge
            Technologies&mdash;the part of the company that builds software for
            everyday life. We&apos;d rather ship one app people love than ten
            they tolerate, so there&apos;s no growth-hacking, no dark patterns,
            no engagement tricks. Just software we&apos;d want on our own
            phones.
          </p>
          <p className="text-foreground/70 text-lg leading-relaxed max-w-xl mx-auto">
            The name comes from a star in Sagittarius. The goal is the same as
            the tagline: build things that lift people up.
          </p>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border bg-card/50">
        <Container size="sm" className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Be there when it ships.
          </h2>
          <p className="text-foreground/70 mb-8 max-w-xl mx-auto text-lg">
            One email at launch. A few honest updates before it. That&apos;s the
            whole ask.
          </p>
          <Button variant="gradient" href="#follow" className="px-8">
            Leave Your Email
          </Button>
          <p className="text-foreground/50 text-sm mt-6">
            Got an idea worth building?{' '}
            <Link href="/contact" className="text-sky hover:underline">
              Tell us about it
            </Link>
            .
          </p>
        </Container>
      </section>
    </div>
  );
}
