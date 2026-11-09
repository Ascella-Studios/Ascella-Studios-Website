import type { Metadata } from 'next';
import { Suspense } from 'react';
import ContactForm from './ContactForm';
import AuroraBackground from '@/components/AuroraBackground';
import Container from '@/components/Container';
import { Icon, SocialIcon, socialLinks, type IconName } from '@/components/icons';

const description =
  'Get in touch with Ascella Studios about our apps, a website or consult through Ascella Solutions, or a partnership.';

export const metadata: Metadata = {
  title: 'Contact',
  description,
  openGraph: {
    title: 'Contact Ascella Studios',
    description,
    url: 'https://ascellastudios.com/contact',
  },
  alternates: { canonical: '/contact' },
};

const contactInfo: { label: string; icon: IconName; content: React.ReactNode }[] = [
  {
    label: 'Email',
    icon: 'mail',
    content: (
      <a href="mailto:hello@ascellastudios.com" className="text-foreground/70 hover:text-accent transition-colors">
        hello@ascellastudios.com
      </a>
    ),
  },
  {
    label: 'Based in',
    icon: 'pin',
    content: <p className="text-foreground/70">Watertown, Wisconsin. Working with businesses anywhere.</p>,
  },
  {
    label: 'Free consults',
    icon: 'chat',
    content: (
      <p className="text-foreground/70">
        Choose &ldquo;Ascella Solutions&rdquo; in the form and tell us about your business. We&apos;ll reply to
        set up a time.
      </p>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="bg-background relative overflow-hidden py-16 sm:py-24">
      <AuroraBackground variant="subtle" />
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <p className="eyebrow mb-4">Contact</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Let&apos;s <span className="text-gradient">talk</span>
            </h1>
            <p className="text-lg text-foreground/70 mb-10">
              A website for your business, a question about one of our apps, or a partnership idea.
              Every message is read by a person.
            </p>

            <h2 className="sr-only">Contact information</h2>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="size-10 rounded-lg border border-border bg-card text-accent flex items-center justify-center shrink-0">
                    <Icon name={item.icon} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.label}</h3>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="font-semibold text-foreground mb-4">Find us elsewhere</h3>
              <div className="flex gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-11 rounded-lg border border-border bg-card flex items-center justify-center text-foreground/70 hover:text-accent hover:border-sky/50 transition-colors"
                    aria-label={item.name}
                  >
                    <SocialIcon path={item.path} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Suspense fallback={<div className="rounded-2xl border border-border bg-card p-8 min-h-[32rem]" />}>
            <ContactForm />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
