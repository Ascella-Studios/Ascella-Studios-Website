import Image from 'next/image';
import Link from 'next/link';
import Waitlist from '@/components/Waitlist';
import AuroraBackground from '@/components/AuroraBackground';
import Container from '@/components/Container';
import Button from '@/components/Button';
import AppShowcase, { AppIcon } from '@/components/AppShowcase';
import FftStrip from '@/components/FftStrip';
import { apps } from '@/data/apps';
import { FFT_URL, offers, PHONE_DISPLAY, PHONE_HREF } from '@/data/solutions';
import { STUDIO_UPDATES_LIST_ID } from '@/lib/waitlist';

const websiteFrom = offers.find((o) => o.id === 'websites')?.price;

export default function Home() {
  const [first, second] = apps;
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
                We build and run{' '}
                <Link href="/apps/streamergames" className="text-foreground underline decoration-border underline-offset-4 hover:text-accent">
                  StreamerGames
                </Link>
                , a chat-game arcade for Twitch streamers, and{' '}
                <Link href="/apps/homehelpersco" className="text-foreground underline decoration-border underline-offset-4 hover:text-accent">
                  HomeHelpersCo
                </Link>
                , a request board for homeowners in Jefferson County. We also build websites for
                small businesses.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Button variant="primary" href="#apps">
                  See the apps
                </Button>
                <Button variant="outline" href="/solutions">
                  Need a website?
                </Button>
              </div>
            </div>

            {/* Product stack */}
            {first && second && (
              <div className="lg:col-span-6 relative h-[22rem] sm:h-[26rem] hidden sm:block" aria-hidden>
                <Link
                  href={`/apps/${second.id}`}
                  tabIndex={-1}
                  className="absolute right-0 top-0 w-[78%] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/30 rotate-2 hover:rotate-0 transition-transform duration-500"
                >
                  <Image src={second.hero.src} alt="" width={second.hero.width} height={second.hero.height} priority sizes="520px" className="w-full h-auto aspect-[16/10] object-cover object-top" />
                </Link>
                <Link
                  href={`/apps/${first.id}`}
                  tabIndex={-1}
                  className="absolute left-0 bottom-0 w-[72%] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/40 -rotate-2 hover:rotate-0 transition-transform duration-500"
                >
                  <Image src={first.hero.src} alt="" width={first.hero.width} height={first.hero.height} priority sizes="480px" className="w-full h-auto aspect-[16/10] object-cover" />
                  <span className="absolute left-3 bottom-3 inline-flex items-center gap-2 rounded-full bg-background/85 backdrop-blur px-3 py-1.5 text-xs font-medium text-foreground">
                    <AppIcon app={first} size={16} />
                    {first.name}
                  </span>
                </Link>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Apps */}
      <section id="apps" className="py-20 lg:py-28 scroll-mt-16">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">What we&rsquo;ve shipped</h2>
            <Link href="/apps" className="text-sm font-medium text-accent hover:underline">
              All apps &rarr;
            </Link>
          </div>
          <div className="space-y-24">
            {apps.map((app, i) => (
              <AppShowcase key={app.id} app={app} flip={i % 2 === 1} />
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
              <h2 className="text-3xl font-bold text-foreground tracking-tight">Need a website for your business?</h2>
              <p className="mt-4 text-lg text-foreground/70 leading-relaxed">
                That&rsquo;s Ascella Solutions. I build websites and landing pages for small
                businesses, and help owners figure out which tech is worth paying for.
                {websiteFrom && websiteFrom !== 'TBD' ? ` Websites start at ${websiteFrom.replace(/^From /i, '')}.` : ''}{' '}
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
