import Image from 'next/image';
import Link from 'next/link';
import type { App } from '@/data/apps';
import Button from '@/components/Button';
import { Icon } from '@/components/icons';

export function StatusBadge({ status }: { status: App['status'] }) {
  const live = status === 'Live';
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${
        live ? 'border-mint/30 bg-mint/10 text-positive' : 'border-border bg-card text-foreground/70'
      }`}
    >
      <span className={`size-1.5 rounded-full ${live ? 'bg-mint' : 'bg-foreground/40'}`} aria-hidden />
      {status}
    </span>
  );
}

export function AppIcon({ app, size = 40 }: { app: App; size?: number }) {
  return (
    <Image
      src={app.icon}
      alt=""
      width={size}
      height={size}
      unoptimized
      className="rounded-lg shrink-0"
      style={{ width: size, height: size }}
    />
  );
}

/** Large alternating feature row used on the home page and /apps. */
export default function AppShowcase({ app, flip = false, priority = false }: { app: App; flip?: boolean; priority?: boolean }) {
  return (
    <article className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      <Link
        href={`/apps/${app.id}`}
        className={`group lg:col-span-7 block overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/20 ${
          flip ? 'lg:order-2' : ''
        }`}
        aria-label={`${app.name} case study`}
      >
        <Image
          src={app.hero.src}
          alt={app.hero.alt}
          width={app.hero.width}
          height={app.hero.height}
          priority={priority}
          sizes="(min-width: 1024px) 680px, 100vw"
          className="w-full h-auto aspect-[16/10] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </Link>

      <div className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
        <div className="flex items-center gap-3 mb-5">
          <AppIcon app={app} />
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status={app.status} />
            <span className="text-xs font-mono uppercase tracking-wider text-foreground/50">{app.category}</span>
          </div>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">{app.name}</h3>
        <p className="mt-2 text-lg font-medium text-foreground/80">{app.tagline}</p>
        <p className="mt-4 text-foreground/70 leading-relaxed">{app.summary}</p>
        <ul className="mt-6 space-y-2.5">
          {app.highlights.slice(0, 3).map((h) => (
            <li key={h.title} className="flex items-start gap-3 text-foreground/80">
              <Icon name="check" className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span>{h.title}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button variant="primary" href={`/apps/${app.id}`}>
            Read the case study
          </Button>
          <Button variant="outline" href={app.url} target="_blank" rel="noopener noreferrer">
            Visit {app.displayUrl}
            <Icon name="arrowUpRight" className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}
