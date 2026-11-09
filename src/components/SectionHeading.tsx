import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as: Heading = 'h2',
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <div className={`${centered ? 'text-center mx-auto' : ''} max-w-2xl ${className}`}>
      {eyebrow && (
        <p className="eyebrow mb-4">{eyebrow}</p>
      )}
      <Heading
        className={`font-bold text-foreground tracking-tight ${
          Heading === 'h1' ? 'text-4xl md:text-6xl' : 'text-3xl md:text-4xl'
        }`}
      >
        {title}
      </Heading>
      {description && (
        <p className="mt-5 text-lg text-foreground/70 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
