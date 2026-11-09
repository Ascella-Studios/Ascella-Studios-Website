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

/** Compact card: image, name, one line. Used on the home page. */
export function AppCard({ app }: { app: App }) {
  return (
    <Link
      href={`/apps/${app.id}`}
      className="group flex flex-col sm:flex-row gap-5 rounded-2xl border border-border bg-card p-4 hover:border-sky/50 transition-colors"
    >
      <Image
        src={app.hero.src}
        alt=""
        width={app.hero.width}
        height={app.hero.height}
        sizes="(min-width: 640px) 200px, 100vw"
        className="w-full sm:w-48 aspect-video rounded-xl object-cover object-top border border-border shrink-0"
      />
      <div className="flex-1 min-w-0 self-center">
        <div className="flex items-center gap-2.5">
          <AppIcon app={app} size={24} />
          <h3 className="font-semibold text-foreground">{app.name}</h3>
        </div>
        <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{app.tagline}</p>
        <p className="mt-3 text-sm font-medium text-accent inline-flex items-center gap-1.5">
          How we built it
          <Icon name="arrowRight" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </p>
      </div>
    </Link>
  );
}

/** Large alternating feature row used on /apps. */
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
          <h3 className="text-3xl font-bold text-foreground tracking-tight">{app.name}</h3>
        </div>
        <p className="mt-2 text-lg font-medium text-foreground/80">{app.tagline}</p>
        <p className="mt-4 text-foreground/70 leading-relaxed">{app.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground/60">
          {app.facts.map((fact) => (
            <li key={fact} className="flex items-center gap-2">
              <span className="size-1 rounded-full bg-foreground/40" aria-hidden />
              {fact}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button variant="primary" href={`/apps/${app.id}`}>
            How we built it
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
