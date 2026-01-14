import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Ascella Studios | Apps that elevate",
  description:
    "Ascella Studios designs and builds apps that make a difference—whether it's simplifying your day, solving a real problem, or helping you do more with less.",
  openGraph: {
    title: "Ascella Studios | Apps that elevate",
    description:
      "Ascella Studios designs and builds apps that make a difference—whether it's simplifying your day, solving a real problem, or helping you do more with less.",
    url: "https://ascellastudios.com",
  },
};

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
              Apps that{' '}
              <span className="bg-gradient-to-r from-sky via-teal to-mint bg-clip-text text-transparent">
                elevate
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              Ascella Studios designs and builds apps that make a difference—whether it&apos;s
              simplifying your day, solving a real problem, or helping you do more with less.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apps"
                className="px-6 py-3 bg-sky text-white font-medium rounded-lg hover:bg-sky/90 transition-colors text-center"
              >
                View Our Apps
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-foreground text-foreground font-medium rounded-lg hover:bg-foreground hover:text-background transition-colors text-center"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">What We Do</h2>
            <p className="mt-4 text-foreground/70">
              We focus on what matters most: creating exceptional user experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-background border border-border">
              <div className="w-12 h-12 rounded-lg bg-sky/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Mobile Apps</h3>
              <p className="text-foreground/70">
                Native and cross-platform mobile applications built with modern technologies.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-background border border-border">
              <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Web Apps</h3>
              <p className="text-foreground/70">
                Responsive web applications that work seamlessly across all devices.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-background border border-border">
              <div className="w-12 h-12 rounded-lg bg-mint/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">UI/UX Design</h3>
              <p className="text-foreground/70">
                Thoughtful design that puts users first and creates memorable experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-gradient-to-r from-sky via-teal to-mint rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Let&apos;s work together to bring your ideas to life. Get in touch and tell us about your vision.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-dark font-medium rounded-lg hover:bg-light transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
