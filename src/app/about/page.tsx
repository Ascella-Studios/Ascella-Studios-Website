import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Ascella Studios is an independent app studio focused on creating thoughtful, well-crafted software that solves real problems for individuals, teams, and businesses.',
  openGraph: {
    title: 'About Ascella Studios',
    description:
      'Ascella Studios is an independent app studio focused on creating thoughtful, well-crafted software that solves real problems for individuals, teams, and businesses.',
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
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Independent App Studio
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Building apps that{' '}
              <span className="bg-gradient-to-r from-sky via-teal to-mint bg-clip-text text-transparent">
                elevate
              </span>{' '}
              your experience
            </h1>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              We're an independent studio creating thoughtful, well-crafted software
              that solves real problems and makes a genuine difference in people's lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apps"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky text-white font-medium rounded-lg hover:bg-sky/90 transition-colors"
              >
                View Our Work
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-foreground/5 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
              <p>
                Ascella Studios was born from a simple belief: software should be intentional,
                beautiful, and genuinely useful. Too many apps are built to check boxes or chase
                trends. We wanted to do something different.
              </p>
              <p>
                We're a small, independent studio that takes the time to understand real problems
                and craft thoughtful solutions. Every app we build is designed with care—from the
                first wireframe to the final pixel.
              </p>
              <p>
                The name "Ascella" comes from a star in the constellation Sagittarius, but it also
                evokes the idea of ascending—rising up, elevating. That's our mission: to create
                tools that help individuals and businesses reach new heights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Visual Section */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-sky/10 via-teal/10 to-mint/10 rounded-3xl p-12 aspect-square flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky/5 to-mint/5"></div>
                  <div className="relative text-center">
                    <svg className="w-32 h-32 mx-auto text-sky mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <div className="space-y-2">
                      <div className="h-2 w-24 bg-teal/30 rounded mx-auto"></div>
                      <div className="h-2 w-32 bg-mint/30 rounded mx-auto"></div>
                      <div className="h-2 w-20 bg-sky/30 rounded mx-auto"></div>
                    </div>
                  </div>
                  {/* Decorative circles */}
                  <div className="absolute top-8 right-8 w-16 h-16 border-2 border-sky/20 rounded-full"></div>
                  <div className="absolute bottom-8 left-8 w-12 h-12 border-2 border-mint/20 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Apps that <span className="text-sky">elevate</span>
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                We don't just build software—we create experiences that make a difference.
                Whether it's simplifying complex workflows, sparking creativity, or solving
                everyday problems, our apps are designed to lift you up.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">User-First Design</h3>
                    <p className="text-foreground/70">Every decision starts with the user experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Quality Over Speed</h3>
                    <p className="text-foreground/70">We take the time to get it right</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-mint/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Real Solutions</h3>
                    <p className="text-foreground/70">Built to solve actual problems, not chase trends</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Our process is built around understanding, crafting, and refining until we get it right.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-sky/50 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky to-sky/70 flex items-center justify-center text-white font-bold text-lg">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Discover</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  We start by deeply understanding the problem. What are users struggling with?
                  What's the real pain point? We ask questions, research, and listen.
                </p>
              </div>
              {/* Connector line (hidden on mobile) */}
              <div className="hidden md:block absolute top-16 -right-6 w-12 h-0.5 bg-gradient-to-r from-sky/50 to-transparent"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-teal/50 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal to-teal/70 flex items-center justify-center text-white font-bold text-lg">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Design</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  With a clear understanding, we craft thoughtful solutions. Every interaction,
                  every screen, every detail is intentionally designed for the best experience.
                </p>
              </div>
              {/* Connector line (hidden on mobile) */}
              <div className="hidden md:block absolute top-16 -right-6 w-12 h-0.5 bg-gradient-to-r from-teal/50 to-transparent"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-mint/50 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mint to-mint/70 flex items-center justify-center text-white font-bold text-lg">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Deliver</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  We build with precision, test thoroughly, and refine until it's right.
                  Launch is just the beginning—we continue to improve based on real usage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              These core values guide every decision we make and every line of code we write.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background border border-border rounded-2xl p-8 text-center hover:border-sky/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky to-sky/70 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Thoughtful</h3>
              <p className="text-foreground/70 leading-relaxed">
                Every decision is intentional. We craft software with care, attention to detail,
                and deep consideration for the user.
              </p>
            </div>

            <div className="bg-background border border-border rounded-2xl p-8 text-center hover:border-teal/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal to-teal/70 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Quality First</h3>
              <p className="text-foreground/70 leading-relaxed">
                We take the time to get it right. No shortcuts, no compromises—just solid,
                well-crafted software that works.
              </p>
            </div>

            <div className="bg-background border border-border rounded-2xl p-8 text-center hover:border-mint/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-mint to-mint/70 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Long-Term Thinking</h3>
              <p className="text-foreground/70 leading-relaxed">
                We're not chasing trends or quick wins. We build sustainable, maintainable
                software designed to last and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky/10 via-teal/10 to-mint/10 border border-teal/20 p-12 text-center hover:border-teal/40 transition-all duration-300">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky/20 rounded-full blur-3xl -translate-y-1/2 group-hover:bg-sky/30 transition-colors duration-500"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-mint/20 rounded-full blur-3xl translate-y-1/2 group-hover:bg-mint/30 transition-colors duration-500"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Let&apos;s Build Something Great
              </h2>
              <p className="text-foreground/70 mb-8 max-w-2xl mx-auto text-lg">
                Have an idea? Want to collaborate? We&apos;d love to hear from you and explore
                how we can help bring your vision to life.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky via-teal to-mint text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-lg"
              >
                Get in Touch
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
