import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AuroraBackground from '@/components/AuroraBackground';
import Container from '@/components/Container';
import Button from '@/components/Button';
import CtaBand from '@/components/CtaBand';
import { AppIcon, StatusBadge } from '@/components/AppShowcase';
import { Icon } from '@/components/icons';
import { apps, getApp } from '@/data/apps';
import { CONSULT_HREF } from '@/data/solutions';

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
      <section className="relative overflow-hidden pt-16 sm:pt-20 pb-12">
        <AuroraBackground variant="subtle" />
        <Container className="relative z-10">
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors mb-10"
          >
            <Icon name="arrowRight" className="w-4 h-4 rotate-180" />
            All apps
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <AppIcon app={app} size={56} />
            <p className="eyebrow">Case study</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">{app.name}</h1>
          <p className="mt-4 text-xl md:text-2xl text-foreground/80 max-w-3xl">{app.tagline}</p>
          <p className="mt-5 text-lg text-foreground/70 max-w-3xl leading-relaxed">{app.summary}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
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
                <dt className="text-xs font-mono uppercase tracking-wider text-foreground/50">{fact.label}</dt>
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
              <p className="eyebrow mb-4">The problem</p>
              <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
                {app.problem.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow mb-4">What we built</p>
              <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
                {app.approach.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Highlights */}
      <section className="py-20 border-t border-border bg-card/50">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-12">What makes it work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {app.highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-border bg-background p-6">
                <Icon name="check" className="w-5 h-5 text-accent mb-4" />
                <h3 className="font-semibold text-foreground">{h.title}</h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{h.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery */}
      {app.gallery && app.gallery.length > 1 && (
        <section className="py-20 border-t border-border">
          <Container>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-12">A closer look</h2>
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
              <p className="eyebrow mb-4">Business model</p>
              <p className="text-foreground/80 text-lg leading-relaxed">{app.model}</p>
            </div>
            <div>
              <p className="eyebrow mb-4">Built with</p>
              <ul className="flex flex-wrap gap-2">
                {app.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-mono text-foreground/80"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {app.note && <p className="mt-12 text-xs text-foreground/50 max-w-2xl">{app.note}</p>}
        </Container>
      </section>

      {/* More apps */}
      {others.length > 0 && (
        <section className="py-16 border-t border-border bg-card/50">
          <Container>
            <p className="eyebrow mb-6">More from Ascella</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {others.map((other) => (
                <Link
                  key={other.id}
                  href={`/apps/${other.id}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-5 hover:border-sky/50 transition-colors"
                >
                  <AppIcon app={other} size={44} />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground">{other.name}</p>
                    <p className="text-sm text-foreground/60 truncate">{other.tagline}</p>
                  </div>
                  <Icon
                    name="arrowRight"
                    className="w-5 h-5 text-foreground/40 group-hover:text-accent group-hover:translate-x-0.5 transition-all"
                  />
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        title="Have something you want built?"
        description="Ascella Solutions brings the same approach to websites, landing pages, and software advice for small businesses."
      >
        <Button variant="gradient" href={CONSULT_HREF}>
          Book a free consult
        </Button>
        <Button variant="outline" href="/solutions">
          About Ascella Solutions
        </Button>
      </CtaBand>
    </div>
  );
}
