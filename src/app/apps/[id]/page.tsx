import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { AppIcon, StatusBadge } from '@/components/AppShowcase';
import { Icon } from '@/components/icons';
import { apps, getApp } from '@/data/apps';

type Props = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return apps.map((app) => ({ id: app.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const app = getApp(id);
  if (!app) return {};
  const title = `${app.name}: ${app.tagline}`;
  return {
    title: app.name,
    description: app.summary,
    openGraph: {
      title,
      description: app.summary,
      url: `https://ascellastudios.com/apps/${app.id}`,
      images: [{ url: app.hero.src, width: app.hero.width, height: app.hero.height, alt: app.hero.alt }],
    },
    twitter: { card: 'summary_large_image', title, description: app.summary, images: [app.hero.src] },
    alternates: { canonical: `/apps/${app.id}` },
  };
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-medium text-accent mb-4">{children}</p>;
}

export default async function AppCaseStudyPage({ params }: Props) {
  const { id } = await params;
  const app = getApp(id);
  if (!app) notFound();

  const others = apps.filter((other) => other.id !== app.id);

  const facts = [
    { label: 'Status', value: <StatusBadge status={app.status} /> },
    { label: 'Launched', value: app.launched },
    { label: 'Category', value: app.category },
    { label: 'Runs on', value: app.platforms.join(' · ') },
  ];

  return (
    <div className="bg-background">
      {/* Header */}
      <section className="pt-12 sm:pt-16 pb-12">
        <Container>
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors mb-10"
          >
            <Icon name="arrowRight" className="w-4 h-4 rotate-180" />
            All apps
          </Link>
          <div className="flex items-center gap-4">
            <AppIcon app={app} size={52} />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">{app.name}</h1>
          </div>
          <p className="mt-5 text-xl md:text-2xl text-foreground/80 max-w-3xl">{app.tagline}</p>
          <p className="mt-4 text-lg text-foreground/70 max-w-3xl leading-relaxed">{app.summary}</p>
          <div className="mt-8">
            <Button variant="primary" href={app.url} target="_blank" rel="noopener noreferrer">
              Visit {app.displayUrl}
              <Icon name="arrowUpRight" className="w-4 h-4" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Hero image + facts */}
      <section className="pb-20">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/20">
            <Image
              src={app.hero.src}
              alt={app.hero.alt}
              width={app.hero.width}
              height={app.hero.height}
              priority
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="w-full h-auto"
            />
          </div>
          <dl className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-background p-5">
                <dt className="text-sm text-foreground/60">{fact.label}</dt>
                <dd className="mt-2 text-foreground font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Problem / approach */}
      <section className="py-20 border-t border-border">
        <Container size="md">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <Label>The problem</Label>
              <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
                {app.problem.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <div>
              <Label>What we built</Label>
              <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
                {app.approach.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Decisions */}
      <section className="py-20 border-t border-border bg-card/50">
        <Container size="md">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Decisions we made</h2>
          <p className="mt-3 text-lg text-foreground/70">The calls that shaped it, and why.</p>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {app.decisions.map((d) => (
              <div key={d.title} className="grid md:grid-cols-[16rem_1fr] gap-3 md:gap-10 py-7">
                <h3 className="font-semibold text-foreground text-lg">{d.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Highlights */}
      <section className="py-20 border-t border-border">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-10">What it does</h2>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            {app.highlights.map((h) => (
              <div key={h.title} className="border-t border-foreground/20 pt-5">
                <dt className="font-semibold text-foreground">{h.title}</dt>
                <dd className="mt-2 text-sm text-foreground/70 leading-relaxed">{h.description}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Gallery */}
      {app.gallery && app.gallery.length > 1 && (
        <section className="py-20 border-t border-border">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-10">{app.galleryTitle ?? 'A closer look'}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {app.gallery.map((img) => (
                <figure key={img.src} className="overflow-hidden rounded-2xl border border-border bg-card">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    className="w-full h-auto aspect-video object-cover object-top"
                  />
                  <figcaption className="px-5 py-4 text-sm text-foreground/70">{img.caption}</figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Model + stack */}
      <section className="py-20 border-t border-border">
        <Container size="md">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <Label>How it makes money</Label>
              <p className="text-foreground/80 text-lg leading-relaxed">{app.model}</p>
            </div>
            <div>
              <Label>Built with</Label>
              <ul className="flex flex-wrap gap-2">
                {app.stack.map((tech) => (
                  <li key={tech} className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-foreground/80">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {app.note && <p className="mt-12 text-xs text-foreground/60 max-w-2xl">{app.note}</p>}
        </Container>
      </section>

      {/* Next */}
      <section className="py-14 border-t border-border bg-card/50">
        <Container>
          <div className="grid sm:grid-cols-2 gap-4">
            {others.map((other) => (
              <Link
                key={other.id}
                href={`/apps/${other.id}`}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-5 hover:border-sky/50 transition-colors"
              >
                <AppIcon app={other} size={44} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground/60">Next</p>
                  <p className="font-semibold text-foreground">{other.name}</p>
                </div>
                <Icon name="arrowRight" className="w-5 h-5 text-foreground/40 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
            <Link
              href="/solutions"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-5 hover:border-sky/50 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground/60">Need something built?</p>
                <p className="font-semibold text-foreground">Ascella Solutions</p>
              </div>
              <Icon name="arrowRight" className="w-5 h-5 text-foreground/40 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
