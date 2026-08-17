import AuroraBackground from '@/components/AuroraBackground';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <div className="bg-background min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      <AuroraBackground variant="subtle" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <p className="font-mono text-7xl md:text-8xl font-bold text-gradient mb-6 select-none">
          404
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
          Page not found
        </h1>
        <p className="text-lg text-foreground/70 max-w-md mx-auto mb-10">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="primary" href="/">
            Go Home
          </Button>
          <Button variant="outline" href="/contact">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
