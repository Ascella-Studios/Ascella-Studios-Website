import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-background min-h-[70vh] flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <p className="text-sky text-lg font-medium mb-4">404</p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Page Not{' '}
          <span className="bg-gradient-to-r from-sky via-teal to-mint bg-clip-text text-transparent">
            Found
          </span>
        </h1>
        <p className="text-lg text-foreground/70 max-w-md mx-auto mb-10">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-sky text-white font-medium rounded-lg hover:bg-sky/90 transition-colors text-center"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-foreground text-foreground font-medium rounded-lg hover:bg-foreground hover:text-background transition-colors text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
