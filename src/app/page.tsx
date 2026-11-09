import Image from 'next/image';
import Link from 'next/link';
import Waitlist from '@/components/Waitlist';
import AuroraBackground from '@/components/AuroraBackground';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { AppCard, AppIcon } from '@/components/AppShowcase';
import { Icon } from '@/components/icons';
import FftStrip from '@/components/FftStrip';
import { apps } from '@/data/apps';
import { FFT_URL, offers, PHONE_DISPLAY, PHONE_HREF } from '@/data/solutions';
import { STUDIO_UPDATES_LIST_ID } from '@/lib/waitlist';

const websiteFrom = offers.find((o) => o.id === 'websites')?.price;

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <AuroraBackground variant="subtle" />
        <Container className="relative z-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-14 items-center">
            <div className="lg:col-span-6">
              <p className="text-sm text-foreground/60 mb-6">
                Ascella Studios &middot; a{' '}
                <a href={FFT_URL} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-accent underline decoration-border underline-offset-4">
                  Frontier Forge Technologies
                </a>{' '}
                company
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.05]">
                Software for everyday life, made in Wisconsin.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-foreground/70 leading-relaxed">
                Ascella Studios is the consumer apps studio of Frontier Forge Technologies. We build
                and run our own apps, and through Ascella Solutions we build websites and software
                for small businesses and founders.
              </p>
            </div>

            {/* Two lanes */}
            <div className="lg:col-span-6 grid gap-4">
              <Link
                href="/apps"
                className="group rounded-2xl border border-border bg-card/80 backdrop-blur p-7 hover:border-sky/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-accent">Apps</p>
                  <div className="flex gap-1.5">
                    {apps.map((app) => (
                      <AppIcon key={app.id} app={app} size={24} />
                    ))}
                  </div>
                </div>
                <h2 className="mt-3 text-2xl font-semibold text-foreground">Our own products</h2>
                <p className="mt-2 text-foreground/70 leading-relaxed">
                  Consumer software we design, launch and keep running: web apps, SaaS and mobile.
                </p>
                <p className="mt-4 text-sm font-medium text-foreground inline-flex items-center gap-1.5">
                  See the apps
                  <Icon name="arrowRight" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </p>
              </Link>
              <Link
                href="/solutions"
                className="group rounded-2xl border border-border bg-card/80 backdrop-blur p-7 hover:border-sky/50 transition-colors"
              >
                <p className="text-sm font-medium text-accent">Ascella Solutions</p>
                <h2 className="mt-3 text-2xl font-semibold text-foreground">Websites and software for clients</h2>
                <p className="mt-2 text-foreground/70 leading-relaxed">
                  Websites{websiteFrom ? ` from ${websiteFrom.replace(/^From /i, '')}` : ''}, plus web apps,
                  SaaS and mobile apps for small businesses and founders. You work with Jared directly.
                </p>
                <p className="mt-4 text-sm font-medium text-foreground inline-flex items-center gap-1.5">
                  Prices and how it works
                  <Icon name="arrowRight" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Apps */}
      <section id="apps" className="py-20 lg:py-24 scroll-mt-16">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Our apps</h2>
              <p className="mt-3 text-lg text-foreground/70">Live today, and run by the people who built them.</p>
            </div>
            <Link href="/apps" className="text-sm font-medium text-accent hover:underline">
              All apps &rarr;
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            {apps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </Container>
      </section>

      {/* Ascella Solutions */}
      <section className="py-20 lg:py-24 border-t border-border bg-card/50">
        <Container size="md">
          <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
            <Image
              src="/team/jared.jpg"
              alt="Jared Klopstein"
              width={383}
              height={351}
              className="size-28 md:size-36 rounded-2xl object-cover border border-border"
            />
            <div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">Need a website or an app built?</h2>
              <p className="mt-4 text-lg text-foreground/70 leading-relaxed">
                That&rsquo;s Ascella Solutions. I build websites for small businesses, and web
                apps, SaaS and mobile apps for businesses and founders.
                {websiteFrom ? ` Websites start at ${websiteFrom.replace(/^From /i, '')}.` : ''}{' '}
                The first call is free, and you deal with me the whole way.
              </p>
              <p className="mt-2 text-foreground/60">Jared Klopstein, founder</p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Button variant="accent" href="/solutions">
                  Prices and how it works
                </Button>
                <Button variant="outline" href={PHONE_HREF}>
                  Call {PHONE_DISPLAY}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FftStrip />

      {/* Studio updates */}
      <section id="follow" className="py-20 scroll-mt-16">
        <Container size="sm">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-foreground">Hear when we launch something</h2>
              <p className="mt-1 text-foreground/60">A short email when there&rsquo;s a new app. That&rsquo;s it.</p>
            </div>
            <Waitlist
              listId={STUDIO_UPDATES_LIST_ID}
              source="studio-updates"
              variant="inline"
              buttonText="Sign up"
              successMessage="Thanks. We’ll email you when there’s something new."
              className="md:w-[26rem]"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
