'use client';

import Link from 'next/link';

export default function SolutionsPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/5 via-transparent to-mint/5"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 text-teal text-sm font-medium mb-8">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              B2B Automation Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-teal via-mint to-sky bg-clip-text text-transparent">
                Elevate
              </span>{' '}
              Your Local Business
            </h1>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              AI-powered automation and modern web solutions built specifically for local service businesses. Stop losing leads. Start growing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal via-mint to-sky text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Book a Free Consultation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <button
                onClick={() => {
                  const section = document.getElementById('how-it-works');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-foreground/5 transition-colors"
              >
                See How It Works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Business Is Leaking Money
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Every day without automation costs you leads, time, and revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pain Point 1 */}
            <div className="bg-background border border-border rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Missed Leads</h3>
              <p className="text-foreground/70 text-sm">
                Slow response times mean lost jobs. If you don&apos;t reply within minutes, someone else will.
              </p>
            </div>

            {/* Pain Point 2 */}
            <div className="bg-background border border-border rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Outdated Website</h3>
              <p className="text-foreground/70 text-sm">
                No online presence or a 2010 website? You&apos;re invisible to customers searching for help.
              </p>
            </div>

            {/* Pain Point 3 */}
            <div className="bg-background border border-border rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Manual Admin Work</h3>
              <p className="text-foreground/70 text-sm">
                Hours spent on scheduling, invoicing, and follow-ups instead of doing billable work.
              </p>
            </div>

            {/* Pain Point 4 */}
            <div className="bg-background border border-border rounded-2xl p-6 hover:border-yellow-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No Follow-Up System</h3>
              <p className="text-foreground/70 text-sm">
                One-time customers stay one-time customers. No automated way to stay top-of-mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Build For You
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Custom automation and web solutions designed for the way local service businesses actually work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal/10 to-teal/5 border border-teal/20 p-8 hover:border-teal/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-teal/20 transition-colors duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-teal/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">AI-Powered Automation</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Stop losing leads to slow response times. We build chatbots, automated follow-ups, and lead routing systems that work 24/7.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70 text-sm">AI chatbots that qualify leads while you sleep</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70 text-sm">Automated appointment scheduling and reminders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70 text-sm">Smart follow-up sequences for past customers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70 text-sm">Review request automation to build your reputation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky/10 to-sky/5 border border-sky/20 p-8 hover:border-sky/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-sky/20 transition-colors duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-sky/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Custom Websites & Landing Pages</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Fast, modern, mobile-first websites built to convert visitors into calls and form submissions—not generic templates.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sky flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70 text-sm">SEO-optimized for local search ranking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sky flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70 text-sm">Mobile-first design that works on any device</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sky flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70 text-sm">Built-in contact forms and call tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sky flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70 text-sm">Fast loading speeds that Google loves</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-mint/10 to-mint/5 border border-mint/20 p-8 hover:border-mint/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-mint/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-mint/20 transition-colors duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-mint/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Lead Generation Systems</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Get a steady stream of quality leads through HomeHelpersCo integration, local SEO, and custom lead funnels.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70 text-sm">Integration with HomeHelpersCo lead platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70 text-sm">Google Business Profile optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70 text-sm">Custom lead capture funnels and landing pages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70 text-sm">Local ad management and optimization</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky/10 to-sky/5 border border-sky/20 p-8 hover:border-sky/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-sky/20 transition-colors duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-sky/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Business Process Automation</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Take the admin burden off your shoulders so you can focus on your craft. We automate the boring stuff.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sky flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70 text-sm">CRM setup and customer data management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sky flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70 text-sm">Automated invoicing and payment reminders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sky flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70 text-sm">Job scheduling and dispatch workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sky flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/70 text-sm">Customer communication automation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 lg:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Getting started is simple. We handle the technical complexity so you can focus on your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-background border border-border rounded-2xl p-8 hover:border-teal/50 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal to-teal/70 flex items-center justify-center text-white font-bold text-lg">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Discovery Call</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  We learn about your business, pain points, and goals. What&apos;s eating up your time? Where are you losing leads? What would make your life easier?
                </p>
              </div>
              {/* Connector line (hidden on mobile) */}
              <div className="hidden md:block absolute top-16 -right-6 w-12 h-0.5 bg-gradient-to-r from-teal/50 to-transparent"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-background border border-border rounded-2xl p-8 hover:border-mint/50 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mint to-mint/70 flex items-center justify-center text-white font-bold text-lg">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Custom Plan</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  We design a tailored automation and web strategy for your business. No cookie-cutter solutions—just the tools you actually need.
                </p>
              </div>
              {/* Connector line (hidden on mobile) */}
              <div className="hidden md:block absolute top-16 -right-6 w-12 h-0.5 bg-gradient-to-r from-mint/50 to-transparent"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-background border border-border rounded-2xl p-8 hover:border-sky/50 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky to-sky/70 flex items-center justify-center text-white font-bold text-lg">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Launch & Support</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  We build it, launch it, and keep optimizing. You&apos;ll get hands-on training, and we&apos;ll be there to support you as your business grows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HomeHelpersCo Integration Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald/10 via-teal/10 to-cyan/10 border border-emerald/20 p-12 hover:border-emerald/40 transition-all duration-300">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald/20 rounded-full blur-3xl -translate-y-1/2 group-hover:bg-emerald/30 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan/20 rounded-full blur-3xl translate-y-1/2 group-hover:bg-cyan/30 transition-colors duration-500"></div>
            <div className="relative max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 text-emerald-500 text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Powered by HomeHelpersCo
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Already Getting Leads from HomeHelpersCo?
              </h2>
              <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
                Getting leads is just the first step. Let us help you actually close them with automated follow-ups, instant responses, and professional systems that turn inquiries into jobs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  Get Set Up With Automation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/apps"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-foreground/5 transition-colors"
                >
                  Learn More About HomeHelpersCo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal/10 via-mint/10 to-sky/10 border border-teal/20 p-12 text-center hover:border-teal/40 transition-all duration-300">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal/20 rounded-full blur-3xl -translate-y-1/2 group-hover:bg-teal/30 transition-colors duration-500"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky/20 rounded-full blur-3xl translate-y-1/2 group-hover:bg-sky/30 transition-colors duration-500"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Modernize Your Business?
              </h2>
              <p className="text-foreground/70 mb-8 max-w-2xl mx-auto text-lg">
                Let&apos;s talk about how automation and modern web tools can help you win more jobs, save time, and grow your business.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal via-mint to-sky text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-lg"
              >
                Book a Free Consultation
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
