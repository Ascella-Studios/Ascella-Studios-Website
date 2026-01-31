'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getNewestApp } from '@/data/apps';

export default function Home() {
  const newestApp = getNewestApp();

  const scrollToContent = () => {
    const nextSection = document.getElementById('new-release');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex-1 flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
              Apps that{' '}
              <span className="bg-gradient-to-r from-sky via-teal to-mint bg-clip-text text-transparent">
                elevate
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              We build software that actually works—apps that solve real problems, load fast, and don&apos;t make you want to throw your phone.
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <button
            onClick={scrollToContent}
            className="text-foreground/50 hover:text-foreground/70 transition-colors cursor-pointer"
            aria-label="Scroll to explore"
          >
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
          <span className="text-sm text-foreground/50">Scroll to explore</span>
        </div>
      </section>

      {/* New Release Section */}
      {newestApp && (
        <section id="new-release" className="py-16 lg:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-sky"></div>
              <h2 className="text-sm font-semibold text-sky tracking-wider uppercase">
                {newestApp.comingSoon ? 'Coming Soon' : 'New Release'}
              </h2>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-sky"></div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky/10 to-sky/5 border border-sky/20 hover:border-sky/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-96 h-96 bg-sky/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-sky/20 transition-colors duration-500"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-teal/20 transition-colors duration-500"></div>
              <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
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
                        href={`/waitlist/${newestApp.id}`}
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

      {/* Features Section - Bento Grid */}
      <section className="py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">Built Different</h2>
            <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
              We don&apos;t just write code—we craft products people actually want to use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {/* Large Featured Card - Web Apps */}
            <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal/10 to-teal/5 border border-teal/20 p-8 lg:p-10 hover:border-teal/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-teal/20 transition-colors duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-teal/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Web Applications</h3>
                <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                  Full-stack web apps that load fast, scale smoothly, and actually solve problems. We build with Next.js, React, and modern infrastructure—because your users deserve better than spinners and lag.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm rounded-full bg-teal/10 text-teal border border-teal/20">Next.js</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-teal/10 text-teal border border-teal/20">React</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-teal/10 text-teal border border-teal/20">TypeScript</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-teal/10 text-teal border border-teal/20">Supabase</span>
                </div>
              </div>
            </div>

            {/* Mobile Apps Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky/10 to-sky/5 border border-sky/20 p-6 lg:p-8 hover:border-sky/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 group-hover:bg-sky/20 transition-colors duration-500"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-sky/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Mobile Apps</h3>
                <p className="text-foreground/70">
                  Native iOS and Android apps that feel right at home on your phone. No weird web wrappers.
                </p>
              </div>
            </div>

            {/* UI/UX Design Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-mint/10 to-mint/5 border border-mint/20 p-6 lg:p-8 hover:border-mint/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-mint/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 group-hover:bg-mint/20 transition-colors duration-500"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-mint/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Design That Works</h3>
                <p className="text-foreground/70">
                  Interfaces people understand without a manual. Function first, pretty second—but we nail both.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky/10 via-teal/10 to-mint/10 border border-teal/20 p-8 sm:p-12 text-center hover:border-teal/40 transition-all duration-300">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky/20 rounded-full blur-3xl -translate-y-1/2 group-hover:bg-sky/30 transition-colors duration-500"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-mint/20 rounded-full blur-3xl translate-y-1/2 group-hover:bg-mint/30 transition-colors duration-500"></div>
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Got an Idea?</h2>
              <p className="text-foreground/70 mb-8 max-w-xl mx-auto text-lg">
                We&apos;re always looking for interesting problems to solve. Tell us what you&apos;re building.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-sky via-teal to-mint text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
