import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Ascella Studios. Learn how we collect, use, and protect your information.',
  openGraph: {
    title: 'Privacy Policy - Ascella Studios',
    description:
      'Privacy Policy for Ascella Studios. Learn how we collect, use, and protect your information.',
    url: 'https://ascellastudios.com/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-background">
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Privacy{' '}
            <span className="bg-gradient-to-r from-sky via-teal to-mint bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-foreground/70 mb-12">
            Last updated: January 2026
          </p>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
                <p className="text-foreground/70">
                  Ascella Studios (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our applications.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
                <p className="text-foreground/70 mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 text-foreground/70 space-y-2">
                  <li>Contact information (such as name and email address) when you reach out to us</li>
                  <li>Usage data and analytics to improve our services</li>
                  <li>Technical information such as browser type and device information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-foreground/70 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-foreground/70 space-y-2">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve and optimize our website and applications</li>
                  <li>Send you updates about our products and services (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
                <p className="text-foreground/70">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
                <p className="text-foreground/70">
                  You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications at any time. To exercise these rights, please contact us at hello@ascellastudios.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
                <p className="text-foreground/70">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-foreground/70">
                  If you have any questions about this Privacy Policy, please contact us at hello@ascellastudios.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
