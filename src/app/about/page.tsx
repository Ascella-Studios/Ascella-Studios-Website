import type { Metadata } from 'next';

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
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-sky via-teal to-mint bg-clip-text text-transparent">
                Ascella Studios
              </span>
            </h1>
            <p className="text-lg text-foreground/70">
              Ascella Studios is an independent app studio focused on creating thoughtful,
              well-crafted software. We build apps that solve real problems—for individuals,
              teams, and businesses alike.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Why Ascella?</h2>
              <p className="text-foreground/70">
                The name &quot;Ascella&quot; comes from the concept of ascending. It reflects
                our mission: to create tools that help people and businesses rise.
              </p>
            </div>
            <div className="bg-gradient-to-br from-sky/10 via-teal/10 to-mint/10 rounded-3xl p-8 sm:p-12 aspect-square max-w-xs mx-auto md:max-w-none flex items-center justify-center">
              <div className="text-center">
                <svg className="w-24 h-24 mx-auto text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <p className="text-foreground mt-4 font-medium">Ascending</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-sky/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Thoughtful</h3>
              <p className="text-foreground/70">
                Every decision is intentional. We craft software with care and attention to detail.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Problem Solvers</h3>
              <p className="text-foreground/70">
                We build apps that address real challenges and make a genuine difference.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-mint/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Independent</h3>
              <p className="text-foreground/70">
                We&apos;re self-directed and focused on building what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
