import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for Ascella Studios. Read our terms and conditions for using our website and applications.',
  openGraph: {
    title: 'Terms of Service - Ascella Studios',
    description:
      'Terms of Service for Ascella Studios. Read our terms and conditions for using our website and applications.',
    url: 'https://ascellastudios.com/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="bg-background">
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Terms of{' '}
            <span className="bg-gradient-to-r from-sky via-teal to-mint bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="text-foreground/70 mb-12">
            Last updated: January 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
                <p className="text-foreground/70">
                  By accessing or using the Ascella Studios website and applications, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Use of Services</h2>
                <p className="text-foreground/70 mb-4">
                  You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc pl-6 text-foreground/70 space-y-2">
                  <li>Use our services in any way that violates applicable laws or regulations</li>
                  <li>Attempt to interfere with or disrupt our services or servers</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation</li>
                  <li>Collect or harvest any information from our services without permission</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
                <p className="text-foreground/70">
                  All content, features, and functionality of our website and applications are owned by Ascella Studios and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer of Warranties</h2>
                <p className="text-foreground/70">
                  Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or completely secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-foreground/70">
                  To the fullest extent permitted by law, Ascella Studios shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
                <p className="text-foreground/70">
                  We reserve the right to modify these Terms of Service at any time. We will notify you of any changes by posting the new Terms on this page and updating the &quot;Last updated&quot; date. Your continued use of our services after any changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
                <p className="text-foreground/70">
                  These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-foreground/70">
                  If you have any questions about these Terms of Service, please contact us at hello@ascellastudios.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
