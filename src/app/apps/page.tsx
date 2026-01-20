import type { Metadata } from 'next';
import Image from 'next/image';
import { apps } from '@/data/apps';

export const metadata: Metadata = {
  title: 'Apps',
  description:
    'Explore the apps built by Ascella Studios—thoughtfully designed mobile and web applications that simplify your day and solve real problems.',
  openGraph: {
    title: 'Apps by Ascella Studios',
    description:
      'Explore the apps built by Ascella Studios—thoughtfully designed mobile and web applications that simplify your day and solve real problems.',
    url: 'https://ascellastudios.com/apps',
  },
};

export default function AppsPage() {
  return (
    <div className="bg-background">
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-sky via-teal to-mint bg-clip-text text-transparent">
                Apps
              </span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Thoughtfully crafted applications designed to simplify your workflow and solve real problems.
            </p>
          </div>

          {/* Apps Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
            {apps.map((app) => (
              <div
                key={app.id}
                className="group relative bg-card border border-border rounded-2xl p-8 hover:border-sky/50 transition-all duration-300"
              >
                {/* Status Badge */}
                {app.comingSoon && (
                  <div className="absolute top-6 right-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky/10 text-sky text-xs font-medium">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-sky"></span>
                      </span>
                      {app.status}
                    </div>
                  </div>
                )}

                {/* App Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.gradient} mb-6 flex items-center justify-center overflow-hidden`}>
                  {app.logo ? (
                    <Image
                      src={app.logo}
                      alt={`${app.name} logo`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                </div>

                {/* App Info */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {app.name}
                </h3>
                <p className="text-foreground/90 font-medium mb-4">
                  {app.tagline}
                </p>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {app.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground/90 mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {app.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-foreground/70"
                      >
                        <svg
                          className="w-5 h-5 text-mint flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground/90 mb-3">
                    Built With
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {app.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-foreground/5 border border-border rounded-full text-xs font-medium text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                {app.comingSoon && (
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sky font-medium hover:text-sky/80 transition-colors"
                  >
                    Get notified at launch
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
                  </a>
                )}
              </div>
            ))}

            {/* Coming Soon Placeholder */}
            <div className="bg-card border border-dashed border-border rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky/20 via-teal/20 to-mint/20 mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-foreground/30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground/50 mb-2">
                More Apps Coming
              </h3>
              <p className="text-foreground/40 max-w-xs">
                We&apos;re always working on new ideas. Stay tuned for future releases.
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-foreground/70 mb-6">
              Have an idea for an app or want to collaborate?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sky text-white font-medium rounded-lg hover:bg-sky/90 transition-colors"
            >
              Get in Touch
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
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
