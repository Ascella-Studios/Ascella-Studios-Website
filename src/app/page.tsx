import Link from 'next/link';
import Waitlist from '@/components/Waitlist';
import AuroraBackground from '@/components/AuroraBackground';
import Container from '@/components/Container';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import AppShowcase, { AppIcon } from '@/components/AppShowcase';
import FftStrip from '@/components/FftStrip';
import { Icon } from '@/components/icons';
import { apps } from '@/data/apps';
import { CONSULT_HREF, services } from '@/data/solutions';
import { STUDIO_UPDATES_LIST_ID } from '@/lib/waitlist';

const beliefs = [
  {
    title: 'Do one thing well.',
    description:
      'The best software solves one real problem completely instead of ten problems halfway. No bloated menus, no features nobody asked for.',
  },
  {
    title: 'Fast is a feature.',
    description:
      'Every screen should load before you wonder if it’s broken. Speed is respect for your time.',
  },
  {
    title: 'Honest by default.',
    description:
      'No dark patterns, no guilt-trip popups, no cancel button hidden three menus deep. Software should earn its place.',
  },
  {
    title: 'Small team, high standards.',
    description:
      'Nothing here is built by committee. Every screen has someone’s name on it, and someone who answers for it.',
  },
];

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[calc(80vh-4rem)] flex items-center">
        <AuroraBackground />
        <Container className="relative z-10 py-24 text-center">
          <p className="eyebrow mb-6">The consumer apps studio of Frontier Forge Technologies</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight">
            Apps that <span className="text-gradient">elevate</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            We build and run our own software for everyday life: SaaS, web platforms, and apps
            that solve one real problem and load fast. Through Ascella Solutions, we help small
            businesses do the same.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href="#apps">
              See our apps
            </Button>
            <Button variant="outline" href="/solutions">
              Work with us
            </Button>
          </div>

          {/* Live products */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-foreground/50">Live now</span>
            {apps.map((app) => (
              <Link
                key={app.id}
                href={`/apps/${app.id}`}
                className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/70 backdrop-blur pl-1.5 pr-4 py-1.5 text-sm text-foreground/80 hover:border-sky/50 hover:text-foreground transition-colors"
              >
                <AppIcon app={app} size={24} />
                {app.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Apps */}
      <section id="apps" className="pt-12 lg:pt-16 pb-24 lg:pb-32 scroll-mt-16">
        <Container>
          <SectionHeading
            eyebrow="Our apps"
            title="Software we build, launch, and run ourselves."
            description="Every Ascella product is live on the web today and maintained by the team that built it."
            className="mb-16 lg:mb-20"
          />
          <div className="space-y-24 lg:space-y-32">
            {apps.map((app, i) => (
              <AppShowcase key={app.id} app={app} flip={i % 2 === 1} priority={i === 0} />
            ))}
          </div>
        </Container>
      </section>

      {/* Ascella Solutions */}
      <section className="py-24 lg:py-32 border-t border-border bg-card/50">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Ascella Solutions"
                title="Websites and straight answers for small businesses."
                description="The same care we put into our own products, applied to yours. We build websites and landing pages, and give practical tech advice to businesses of every kind."
              />
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button variant="gradient" href={CONSULT_HREF}>
                  Book a free consult
                </Button>
                <Button variant="outline" href="/solutions">
                  See how it works
                </Button>
              </div>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/solutions#${service.id}`}
                  className="group flex flex-col lg:flex-row gap-4 rounded-2xl border border-border bg-background p-6 hover:border-sky/50 transition-colors"
                >
                  <div className="size-11 shrink-0 rounded-xl border border-border bg-card text-accent flex items-center justify-center">
                    <Icon name={service.icon} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      {service.title}
                      <Icon
                        name="arrowRight"
                        className="w-4 h-4 text-foreground/40 group-hover:text-accent group-hover:translate-x-0.5 transition-all"
                      />
                    </h3>
                    <p className="mt-1.5 text-sm text-foreground/70 leading-relaxed">{service.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* What we believe */}
      <section id="beliefs" className="py-24 lg:py-32">
        <Container>
          <SectionHeading eyebrow="What we believe" title="How we decide what’s worth building." className="mb-14" />
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {beliefs.map((belief, i) => (
              <div key={belief.title} className="flex gap-6 border-t border-border pt-8">
                <span className="font-mono text-sm text-accent/70 pt-1.5 select-none">0{i + 1}</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{belief.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{belief.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FftStrip />

      {/* Studio updates */}
      <section id="follow" className="py-24 scroll-mt-16">
        <Container size="sm" className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            Get notified when we ship something new.
          </h2>
          <p className="mt-4 text-foreground/70 text-lg max-w-xl mx-auto">
            An email when a new app launches, and the occasional honest update in between. No spam,
            ever.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <Waitlist
              listId={STUDIO_UPDATES_LIST_ID}
              source="studio-updates"
              variant="inline"
              buttonText="Notify me"
              successMessage="You’re on the list. We’ll write when there’s something new to show."
            />
          </div>
          <p className="text-foreground/50 text-sm mt-8">
            Have a project in mind?{' '}
            <Link href={CONSULT_HREF} className="text-accent hover:underline">
              Book a free consult
            </Link>
            .
          </p>
        </Container>
      </section>
    </div>
  );
}
