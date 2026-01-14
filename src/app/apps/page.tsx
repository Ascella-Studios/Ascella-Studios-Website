import type { Metadata } from 'next';

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
    <div className="bg-background min-h-[70vh] flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky/10 text-sky text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky"></span>
          </span>
          In Development
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Coming Soon
        </h1>

        <p className="text-lg text-foreground/70 max-w-xl mx-auto mb-10">
          We&apos;re working on something great. Our first apps are in development and launching soon.
          Follow us to be the first to know.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/"
            className="px-6 py-3 bg-sky text-white font-medium rounded-lg hover:bg-sky/90 transition-colors text-center"
          >
            Back to Home
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-foreground text-foreground font-medium rounded-lg hover:bg-foreground hover:text-background transition-colors text-center"
          >
            Follow Us
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto opacity-30">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-2xl bg-gradient-to-br from-sky/20 via-teal/20 to-mint/20"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
