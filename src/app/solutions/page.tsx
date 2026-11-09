import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AuroraBackground from '@/components/AuroraBackground';
import Container from '@/components/Container';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import CtaBand from '@/components/CtaBand';
import { AppIcon } from '@/components/AppShowcase';
import { Icon } from '@/components/icons';
import { apps } from '@/data/apps';
import { audiences, CONSULT_HREF, faqs, FFT_URL, process, services } from '@/data/solutions';

const description =
  'Ascella Solutions builds websites and landing pages and gives practical tech advice to small businesses. Book a free consult with the team behind StreamerGames and HomeHelpersCo.';

export const metadata: Metadata = {
  title: 'Ascella Solutions: websites and consulting for small businesses',
  description,
  openGraph: {
    title: 'Ascella Solutions | Websites and consulting for small businesses',
    description,
    url: 'https://ascellastudios.com/solutions',
  },
  alternates: { canonical: '/solutions' },
};

export default function SolutionsPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
        <AuroraBackground variant="subtle" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6">Ascella Solutions</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
              Your business, <span className="text-gradient">properly online</span>
            </h1>
            <p className="mt-6 text-xl text-foreground/70 leading-relaxed">
              Websites, landing pages, and plain-spoken tech advice for small businesses of every
              kind, from the team that builds and runs its own software.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" href={CONSULT_HREF}>
                Book a free consult
              </Button>
              <Button variant="outline" href="#services">
                See what we do
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Who it's for */}
      <section className="py-12 border-y border-border bg-card/50">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <p className="text-sm font-semibold text-foreground shrink-0">Built for small businesses:</p>
            <ul className="flex flex-wrap gap-2">
              {audiences.map((a) => (
                <li key={a} className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm text-foreground/80">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="py-24 lg:py-32 scroll-mt-16">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Three ways we can help."
            description="Start with whichever fits. Plenty of projects start as a consult and become a website, and plenty of consults end with “you don’t need us for this.”"
            className="mb-14"
          />
          <div className="grid lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-24 flex flex-col rounded-2xl border border-border bg-card p-8"
              >
                <div className="size-12 rounded-xl border border-border bg-background text-accent flex items-center justify-center mb-6">
                  <Icon name={service.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">{service.summary}</p>
                <ul className="mt-6 pt-6 border-t border-border space-y-3 text-sm">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-foreground/80">
                      <Icon name="check" className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 border-t border-border bg-card/50">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="Simple, and in writing."
            description="No retainers you didn’t ask for, no surprise invoices. You know the plan and the price before anything starts."
            className="mb-14"
          />
          <ol className="grid md:grid-cols-3 gap-6">
            {process.map((step, i) => (
              <li key={step.title} className="relative rounded-2xl border border-border bg-background p-8">
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Proof */}
      <section className="py-24 lg:py-32 border-t border-border">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Why us"
                title="We run our own software, so we build like owners."
                description="We launch, host, and maintain our own products, so we know what keeps a site fast, findable, and working after launch day. HomeHelpersCo was built to bring local contractors work, which is the same kind of small business Ascella Solutions serves."
              />
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {apps.map((app) => (
                <Link
                  key={app.id}
                  href={`/apps/${app.id}`}
                  className="group overflow-hidden rounded-2xl border border-border bg-card hover:border-sky/50 transition-colors"
                >
                  <Image
                    src={app.hero.src}
                    alt={app.hero.alt}
                    width={app.hero.width}
                    height={app.hero.height}
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    className="w-full h-auto aspect-video object-cover object-top"
                  />
                  <div className="p-5 flex items-center gap-3">
                    <AppIcon app={app} size={32} />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground">{app.name}</p>
                      <p className="text-sm text-foreground/60 truncate">{app.category}</p>
                    </div>
                    <Icon
                      name="arrowRight"
                      className="w-5 h-5 text-foreground/40 group-hover:text-accent group-hover:translate-x-0.5 transition-all"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FFT handoff */}
      <section className="py-16 border-t border-border bg-card/50">
        <Container size="md">
          <div className="flex flex-col md:flex-row md:items-center gap-6 rounded-2xl border border-border bg-background p-8">
            <Image
              src="/fft-anvil-mark.webp"
              alt=""
              width={520}
              height={267}
              className="w-28 h-auto shrink-0 invert dark:invert-0 opacity-90"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-foreground">Need AI agents or automation?</h2>
              <p className="mt-2 text-foreground/70 leading-relaxed">
                That’s the work of our parent company, Frontier Forge Technologies. They build AI
                agents, automation, and custom software that take routine work off your plate.
              </p>
            </div>
            <Button variant="outline" href={FFT_URL} target="_blank" rel="noopener noreferrer" className="shrink-0">
              frontierforge.tech
              <Icon name="arrowUpRight" className="w-4 h-4" />
            </Button>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 border-t border-border">
        <Container size="sm">
          <SectionHeading eyebrow="Questions" title="Good to know" className="mb-10" />
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span
                    className="size-8 shrink-0 rounded-full border border-border flex items-center justify-center text-foreground/60 transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-foreground/70 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Let’s talk about your business."
        description="Tell us what you’re working with and what isn’t working. The first conversation is free, and you’ll leave with a clear next step either way."
      >
        <Button variant="gradient" href={CONSULT_HREF}>
          Book a free consult
        </Button>
        <Button variant="outline" href="mailto:hello@ascellastudios.com">
          hello@ascellastudios.com
        </Button>
      </CtaBand>
    </div>
  );
}
