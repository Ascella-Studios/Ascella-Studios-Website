import Link from 'next/link';
import Image from 'next/image';
import Waitlist from '@/components/Waitlist';

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
      'One person who sweats every detail beats a committee shipping compromises. Being small means every pixel gets cared about.',
  },
];

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex-1 flex items-center">
          <div className="text-center w-full">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight">
              Apps that{' '}
              <span className="bg-gradient-to-r from-sky via-teal to-mint bg-clip-text text-transparent">
                elevate
              </span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Ascella Studios is an independent studio making small, carefully
              built apps for everyday life&mdash;software that solves real problems,
              loads fast, and doesn&apos;t make you want to throw your phone.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#follow"
                className="px-6 py-3 bg-sky text-white font-medium rounded-lg hover:bg-sky/90 transition-colors text-center"
              >
                Follow the Build
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 border border-foreground text-foreground font-medium rounded-lg hover:bg-foreground hover:text-background transition-colors text-center"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
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
      <section id="beliefs" className="py-24 lg:py-32 scroll-mt-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-sky tracking-wider uppercase mb-12">
            What we believe
          </h2>
          <div className="space-y-14">
            {beliefs.map((belief, i) => (
              <div key={belief.title} className="flex gap-6">
                <span className="text-foreground/30 font-mono text-lg pt-1.5 select-none">
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
        </div>
      </section>

      {/* Follow the Build */}
      <section id="follow" className="py-24 lg:py-32 bg-card scroll-mt-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-semibold text-sky tracking-wider uppercase mb-4">
                In the works
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                We&apos;re building our first app right now.
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed">
                No fake hype, no vaporware&mdash;just one app being built with care.
                Leave your email and you&apos;ll get one message when it ships, and
                maybe a few honest updates from the workbench along the way.
              </p>
            </div>
            <Waitlist
              listId={ASCELLA_UPDATES_LIST_ID}
              source="follow-the-build"
              title="Follow the Build"
              description="One email when our first app ships. A few honest updates in between. No spam, ever."
              buttonText="Follow Along"
              successMessage="You're in. We'll write when there's something real to show."
            />
          </div>
        </div>
      </section>

      {/* Made by a Human */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-sm font-semibold text-sky tracking-wider uppercase mb-12">
            Made by a human
          </h2>
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-sky via-teal to-mint p-1 mb-6">
            <Image
              src="/jared.jpg"
              alt="Jared Klopstein"
              width={192}
              height={192}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Jared Klopstein
          </h3>
          <p className="text-foreground/50 text-sm mb-6">Founder, Ascella Studios</p>
          <p className="text-foreground/70 text-lg leading-relaxed max-w-xl mx-auto mb-8">
            Ascella is a one-person studio based in Watertown, Wisconsin. I
            started it because too much software is built to check boxes and
            chase trends&mdash;and I&apos;d rather spend my time making a few things
            genuinely well. The name comes from a star in Sagittarius; the goal
            is the same as the tagline: build things that lift people up.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://x.com/ascellastudios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-sky transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://github.com/Ascella-Studios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-sky transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Got an Idea?</h2>
          <p className="text-foreground/70 mb-8 max-w-xl mx-auto text-lg">
            We&apos;re always interested in real problems worth solving. Tell us
            what&apos;s bugging you&mdash;maybe it becomes the next app.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-sky via-teal to-mint text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
