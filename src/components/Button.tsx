import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed';

const variants = {
  primary: 'bg-foreground text-background hover:bg-foreground/90',
  gradient:
    'bg-gradient-to-r from-sky via-teal to-mint text-slate-950 hover:opacity-90 transition-opacity',
  outline: 'border border-border text-foreground hover:bg-card',
} as const;

type Variant = keyof typeof variants;

type ButtonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
);

export default function Button({ variant = 'primary', className = '', children, ...rest }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if ('href' in rest && typeof rest.href === 'string') {
    const { href, ...anchorProps } = rest as { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>;
    // Only same-site paths go through next/link; anchors, mailto:, and full URLs stay plain <a>
    const isInternalRoute = href.startsWith('/');
    if (!isInternalRoute) {
      return (
        <a href={href} className={classes} {...anchorProps}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
