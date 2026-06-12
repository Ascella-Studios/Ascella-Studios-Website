import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Ascella Studios is a one-person independent app studio in Watertown, Wisconsin, building small, carefully crafted apps for everyday life.',
  openGraph: {
    title: 'About Ascella Studios',
    description:
      'Ascella Studios is a one-person independent app studio in Watertown, Wisconsin, building small, carefully crafted apps for everyday life.',
    url: 'https://ascellastudios.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky/5 via-transparent to-mint/5"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky/10 text-sky text-sm font-medium mb-8">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Independent App Studio
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              A small studio with{' '}
              <span className="bg-gradient-to-r from-sky via-teal to-mint bg-clip-text text-transparent">
                big standards
              </span>
            </h1>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              Ascella Studios is a one-person studio in Watertown, Wisconsin,
              making small, carefully crafted apps for everyday life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky text-white font-medium rounded-lg hover:bg-sky/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              The Story
            </h2>
            <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
              <p>
                Ascella Studios started from a simple frustration: too much
                software is built to check boxes or chase trends, and not
                enough is built because someone genuinely cared about the
                problem. I&apos;m Jared, and I founded Ascella to do the second
                kind.
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
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              The process is built around understanding, crafting, and refining until it&apos;s right.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-background border border-border rounded-2xl p-8 hover:border-sky/50 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky to-sky/70 flex items-center justify-center text-white font-bold text-lg">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Discover</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Start by deeply understanding the problem. What are people
                  actually struggling with? What&apos;s the real pain point?
                  Ask questions, research, and listen.
                </p>
              </div>
              <div className="hidden md:block absolute top-16 -right-6 w-12 h-0.5 bg-gradient-to-r from-sky/50 to-transparent"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-background border border-border rounded-2xl p-8 hover:border-teal/50 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal to-teal/70 flex items-center justify-center text-white font-bold text-lg">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Design</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  With a clear understanding, craft a thoughtful solution.
                  Every interaction, every screen, every detail is
                  intentionally designed for the best experience.
                </p>
              </div>
              <div className="hidden md:block absolute top-16 -right-6 w-12 h-0.5 bg-gradient-to-r from-teal/50 to-transparent"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-background border border-border rounded-2xl p-8 hover:border-mint/50 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mint to-mint/70 flex items-center justify-center text-white font-bold text-lg">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Deliver</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Build with precision, test thoroughly, and refine until
                  it&apos;s right. Launch is just the beginning&mdash;then keep
                  improving based on real usage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Say Hi
          </h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto text-lg">
            Questions, ideas, or just curious what we&apos;re building? We&apos;d
            genuinely love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky via-teal to-mint text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-lg"
          >
            Get in Touch
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
