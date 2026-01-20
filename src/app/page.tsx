import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getNewestApp } from '@/data/apps';

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
  const newestApp = getNewestApp();

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

      {/* New Release Section */}
      {newestApp && (
        <section className="py-16 lg:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-sky"></div>
              <h2 className="text-sm font-semibold text-sky tracking-wider uppercase">
                {newestApp.comingSoon ? 'Coming Soon' : 'New Release'}
              </h2>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-sky"></div>
            </div>

            <div className="relative bg-background border border-border rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
                {/* Left Column - App Info */}
                <div className="flex flex-col justify-center">
                  {newestApp.comingSoon && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky/10 text-sky text-xs font-medium w-fit mb-6">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-sky"></span>
                      </span>
                      {newestApp.status}
                    </div>
                  )}

                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    {newestApp.name}
                  </h3>

                  <p className="text-xl text-foreground/90 font-medium mb-4">
                    {newestApp.tagline}
                  </p>

                  <p className="text-foreground/70 mb-8 leading-relaxed">
                    {newestApp.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {newestApp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-foreground/5 border border-border rounded-full text-sm font-medium text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/apps"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky text-white font-medium rounded-lg hover:bg-sky/90 transition-colors"
                    >
                      {newestApp.comingSoon ? 'Learn More' : 'View App'}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                    {newestApp.comingSoon && (
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-foreground/5 transition-colors"
                      >
                        Get Notified
                      </Link>
                    )}
                  </div>
                </div>

                {/* Right Column - App Visual */}
                <div className="flex items-center justify-center lg:justify-end">
                  <div className="relative">
                    {/* Large Logo Display */}
                    <div className={`relative w-64 h-64 lg:w-80 lg:h-80 rounded-3xl bg-gradient-to-br ${newestApp.gradient} p-1 shadow-2xl`}>
                      <div className="w-full h-full rounded-3xl bg-background/5 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                        {newestApp.logo ? (
                          <Image
                            src={newestApp.logo}
                            alt={`${newestApp.name} logo`}
                            width={256}
                            height={256}
                            className="w-3/4 h-3/4 object-contain"
                          />
                        ) : (
                          <svg
                            className="w-32 h-32 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className={`absolute -z-10 top-8 -right-8 w-64 h-64 bg-gradient-to-br ${newestApp.gradient} opacity-20 blur-3xl rounded-full`}></div>
                    <div className={`absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-gradient-to-tr ${newestApp.gradient} opacity-20 blur-3xl rounded-full`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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
