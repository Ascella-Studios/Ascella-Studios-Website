import type { Metadata } from 'next';
import Waitlist from '@/components/Waitlist';

export const metadata: Metadata = {
  title: 'Kept: Quit Gambling - Watch Your Money Come Back',
  description:
    'A private ledger for quitting gambling. Kept tracks your bet-free days and shows the money you kept coming back — live, private, and yours. Coming soon to the App Store.',
  openGraph: {
    title: 'Kept: Quit Gambling - Watch Your Money Come Back',
    description:
      'A private ledger for quitting gambling. Track bet-free days and watch the money you kept grow — no account, fully private.',
    url: 'https://ascellastudios.com/waitlist/kept',
  },
};

const KEPT_LIST_ID = '14';

export default function KeptWaitlistPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                Coming Soon to the App Store
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                The money you don&apos;t bet{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
                  comes back
                </span>
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                Kept is a private ledger for quitting gambling. Set your quit date and what a week
                used to cost, and watch your money return — one bet-free day at a time. No account.
                No feed. Nothing leaves your phone.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'A live ledger of the money you’ve kept since your last bet',
                  'Days strong + lifetime clean days — a slip never erases your money',
                  'A 60-second urge tool and crisis support, free forever',
                  'Private by design: passcode lock, discreet notifications, no signup',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/70">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-foreground/50">
                Built for people quitting sports betting, slots, poker, and compulsive trading.
              </p>
            </div>
            <div>
              <Waitlist
                listId={KEPT_LIST_ID}
                source="kept-landing"
                title="Get Early Access"
                description="Be the first to know when Kept is live on the App Store."
                buttonText="Join the Waitlist"
                successMessage="You're in! We'll email you when Kept is ready."
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-black/20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">How It Works</h2>
          <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
            A ledger, not a scoreboard — three steps and your money starts coming back into view
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Set Your Starting Point', description: 'Enter the date of your last bet and what a typical week used to cost. That’s all Kept needs — no account, no questionnaire.', color: 'emerald' },
              { step: '2', title: 'Close Out Each Day', description: 'An honest evening check-in: was today clean? Clean days grow your ledger. Hard days restart your streak — never your money.', color: 'amber' },
              { step: '3', title: 'Watch It Add Up', description: 'Your Money Kept total grows every day you don’t bet — with charts, milestones, and the reasons you’re doing this front and center.', color: 'emerald' },
            ].map((item) => (
              <div key={item.step} className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-${item.color}-500/10 to-${item.color}-500/5 border border-${item.color}-500/20 p-6 hover:border-${item.color}-500/40 transition-all duration-300`}>
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-${item.color}-500/20 transition-colors duration-500`}></div>
                <div className="relative">
                  <div className={`w-10 h-10 rounded-xl bg-${item.color}-500/20 flex items-center justify-center mb-4`}>
                    <span className={`text-${item.color}-400 font-bold`}>{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">Built for the Hard Moments</h2>
          <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
            Support when an urge hits, privacy when you need it, and a record that never shames you
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'The Live Ledger', description: 'Your Money Kept total, styled like a private bankbook — and with Pro, ticking upward in real time from the moment of your last bet.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
              { title: 'The Urge Button', description: 'A 60-second guided breathing exercise for the moment a craving hits. Urges rise, crest, and pass. Always free, never behind a paywall.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
              { title: 'A Record That Never Shames You', description: 'A relapse restarts your streak — but your money kept and lifetime clean days are permanent. The math is on your side, even on hard days.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> },
              { title: 'Private by Design', description: 'Everything stays on your phone. Face ID lock, notifications that never mention gambling, and no account to create or explain.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /> },
            ].map((feature, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/5 to-amber-500/5 border border-emerald-500/10 p-6 hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">{feature.icon}</svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-foreground/70 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-black/20">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Your money is coming back.</h2>
          <p className="text-foreground/70 mb-8">
            Join the waitlist and be first to start your ledger when Kept lands on the App Store.
          </p>
          <div className="max-w-md mx-auto">
            <Waitlist listId={KEPT_LIST_ID} source="kept-bottom-cta" variant="inline" buttonText="Join Waitlist" />
          </div>
          <p className="text-xs text-foreground/40 mt-10">
            If gambling is hurting you right now, free and confidential help is available today:
            call the National Problem Gambling Helpline at 1-800-522-4700, or dial 988. Kept is a
            companion and tracker, not a substitute for professional help.
          </p>
        </div>
      </section>
    </div>
  );
}
