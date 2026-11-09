import type { ReactNode } from 'react';
import AuroraBackground from '@/components/AuroraBackground';
import Container from '@/components/Container';

/** Closing call-to-action band with a subtle aurora wash. */
export default function CtaBand({
  title,
  description,
  children,
}: {
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden py-24 lg:py-28 border-t border-border">
      <AuroraBackground variant="subtle" />
      <Container size="sm" className="relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">{title}</h2>
        {description && (
          <p className="mt-4 text-lg text-foreground/70 max-w-xl mx-auto leading-relaxed">{description}</p>
        )}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">{children}</div>
      </Container>
    </section>
  );
}
