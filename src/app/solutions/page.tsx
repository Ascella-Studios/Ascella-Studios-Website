import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { Icon } from '@/components/icons';
import {
  CONSULT_HREF,
  EMAIL,
  faqs,
  FFT_URL,
  offers,
  PHONE_DISPLAY,
  PHONE_HREF,
  process,
} from '@/data/solutions';

const description =
  'Websites, custom software and consulting for small businesses and founders, from Jared Klopstein at Ascella Studios in Watertown, Wisconsin. Clear starting prices and a free first call.';

export const metadata: Metadata = {
  title: 'Ascella Solutions: websites and software for small businesses and founders',
  description,
  openGraph: {
    title: 'Ascella Solutions | Websites and software for small businesses and founders',
    description,
    url: 'https://ascellastudios.com/solutions',
  },
  alternates: { canonical: '/solutions' },
};

export default function SolutionsPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="py-16 sm:py-24 border-b border-border">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium text-accent mb-5">Ascella Solutions</p>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.05]">
                Websites and software, built by someone you can call.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl">
                I&rsquo;m Jared Klopstein, founder of Ascella Studios in Watertown, Wisconsin. Through
                Ascella Solutions I build websites for small businesses, and web apps, SaaS products
                and mobile apps for businesses and founders. You deal with me from the first call
                to launch day.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Button variant="accent" href={CONSULT_HREF}>
                  Book a free call
                </Button>
                <Button variant="outline" href={PHONE_HREF}>
                  Call {PHONE_DISPLAY}
                </Button>
              </div>
            </div>

            <aside className="lg:col-span-5 lg:justify-self-end w-full max-w-sm">
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-4">
                  <Image
                    src="/team/jared.jpg"
                    alt="Jared Klopstein"
                    width={383}
                    height={351}
                    priority
                    className="size-20 rounded-xl object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">Jared Klopstein</p>
                    <p className="text-sm text-foreground/60">Founder, Ascella Studios</p>
                    <p className="text-sm text-foreground/60">Watertown, WI</p>
                  </div>
                </div>
                <dl className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-foreground/60">Phone</dt>
                    <dd>
                      <a href={PHONE_HREF} className="text-foreground hover:text-accent">
                        {PHONE_DISPLAY}
                      </a>
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-foreground/60">Email</dt>
                    <dd>
                      <a href={`mailto:${EMAIL}`} className="text-foreground hover:text-accent">
                        {EMAIL}
                      </a>
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-foreground/60">First call</dt>
                    <dd className="text-foreground">Free</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 lg:py-28 scroll-mt-16">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">What it costs</h2>
            <p className="mt-4 text-lg text-foreground/70">
              Websites and landing pages have starting prices. Software is quoted per project,
              because no two are alike. Either way, you get the price in writing before any work
              starts.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-px rounded-2xl overflow-hidden border border-border bg-border">
            {offers.map((offer) => (
              <article key={offer.id} id={offer.id} className="scroll-mt-24 bg-background p-8 flex flex-col">
                <div className="flex items-center gap-3 text-foreground">
                  <Icon name={offer.icon} className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-semibold">{offer.title}</h3>
                </div>
                <p className="mt-6">
                  <span className="text-4xl font-bold text-foreground tracking-tight">{offer.price}</span>
                  <span className="block mt-1 text-sm text-foreground/60">{offer.priceNote}</span>
                </p>
                <p className="mt-5 text-foreground/70 leading-relaxed">{offer.summary}</p>
                <ul className="mt-6 space-y-2.5 text-sm text-foreground/80">
                  {offer.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 size-1 rounded-full bg-foreground/40 shrink-0" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Honest note */}
      <section className="py-16 border-t border-border bg-card/50">
        <Container size="md">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">Ascella Solutions is new.</h2>
          <p className="mt-4 text-lg text-foreground/70 leading-relaxed">
            I don&rsquo;t have a wall of client logos yet. What I do have is the software I&rsquo;ve
            built and still run, including{' '}
            <Link href="/apps" className="text-foreground underline decoration-border underline-offset-4 hover:text-accent">
              our own apps
            </Link>{' '}
            and the site you&rsquo;re reading now. Have a look and judge the work for yourself.
          </p>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-28 border-t border-border">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">How it works</h2>
          <ol className="mt-12 grid md:grid-cols-3 gap-10 md:gap-8">
            {process.map((step, i) => (
              <li key={step.title} className="border-t border-foreground/20 pt-6">
                <p className="text-sm text-foreground/50">Step {i + 1}</p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 border-t border-border">
        <Container size="sm">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-8">Questions people ask</h2>
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
          <p className="mt-8 text-sm text-foreground/60">
            Looking for AI agents or automation? That&rsquo;s{' '}
            <a href={FFT_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Frontier Forge Technologies
            </a>
            , our parent company.
          </p>
        </Container>
      </section>

      {/* Contact */}
      <section className="py-20 border-t border-border bg-card/50">
        <Container size="md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">Tell me about your business.</h2>
              <p className="mt-3 text-lg text-foreground/70">
                Call, email, or send a message. I reply to every one myself.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button variant="accent" href={CONSULT_HREF}>
                Book a free call
              </Button>
              <Button variant="outline" href={PHONE_HREF}>
                {PHONE_DISPLAY}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
