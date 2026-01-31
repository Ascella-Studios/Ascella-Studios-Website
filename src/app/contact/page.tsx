import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Ascella Studios. Have a question, idea, or want to work together? We respond within 24 hours.',
  openGraph: {
    title: 'Contact Ascella Studios',
    description:
      'Get in touch with Ascella Studios. Have a question, idea, or want to work together? We respond within 24 hours.',
    url: 'https://ascellastudios.com/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let&apos;s{' '}
              <span className="bg-gradient-to-r from-sky via-teal to-mint bg-clip-text text-transparent">
                Talk
              </span>
            </h1>
            <p className="text-lg text-foreground/70 mb-10">
              Got a project in mind? Questions about what we do? Just want to say hi? We&apos;re all ears.
            </p>

            <h2 className="sr-only">Contact Information</h2>
            <div className="space-y-4">
              <div className="group flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-sky/5 to-transparent border border-sky/10 hover:border-sky/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-sky/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-6 h-6 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a
                    href="mailto:hello@ascellastudios.com"
                    className="text-foreground/70 hover:text-sky transition-colors"
                  >
                    hello@ascellastudios.com
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-teal/5 to-transparent border border-teal/10 hover:border-teal/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-foreground/70">Watertown, WI</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-mint/5 to-transparent border border-mint/10 hover:border-mint/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-mint/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-6 h-6 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Response Time</h3>
                  <p className="text-foreground/70">Usually within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h3 className="font-semibold text-foreground mb-4">Find us elsewhere</h3>
              <div className="flex gap-3">
                <a
                  href="https://x.com/ascellastudios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky/10 to-sky/5 border border-sky/20 flex items-center justify-center text-foreground/70 hover:text-sky hover:border-sky/40 transition-all duration-300"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Ascella-Studios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal/10 to-teal/5 border border-teal/20 flex items-center justify-center text-foreground/70 hover:text-teal hover:border-teal/40 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/ascellastudios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-gradient-to-br from-mint/10 to-mint/5 border border-mint/20 flex items-center justify-center text-foreground/70 hover:text-mint hover:border-mint/40 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
