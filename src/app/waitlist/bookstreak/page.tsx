import type { Metadata } from 'next';
import Waitlist from '@/components/Waitlist';

export const metadata: Metadata = {
  title: 'BookStreak - Daily Reading Streak Tracker',
  description:
    'Build your daily reading habit with BookStreak. Track pages read, build streaks, and hit your goals. Simple, focused, and beautiful.',
  openGraph: {
    title: 'BookStreak - Daily Reading Streak Tracker',
    description:
      'Track your daily reading, build streaks, and become the reader you want to be. No account needed — all data stays on your device.',
    url: 'https://ascellastudios.com/waitlist/bookstreak',
  },
};

const BOOKSTREAK_LIST_ID = '12';

export default function BookStreakWaitlistPage() {
  return (
    <div className="bg-background min-h-screen">
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium border border-amber-500/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                </span>
                Coming Soon
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Build your daily{' '}
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                  reading streak
                </span>
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                Track pages read, build day streaks, and see your progress at a glance. Whether you read 10 pages before bed or devour chapters on the weekend, BookStreak keeps you accountable.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Track pages read and watch your streak grow',
                  'Set a daily page goal that works for your schedule',
                  'See your reading history on a beautiful 30-day calendar',
                  'Get milestone celebrations at 7, 14, 30, 50, and 100 days',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/70">
                    <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-foreground/50">Join readers building better habits</p>
            </div>
            <div>
              <Waitlist
                listId={BOOKSTREAK_LIST_ID}
                source="bookstreak-landing"
                title="Get Early Access"
                description="Be the first to try BookStreak. Early supporters get lifetime discounts and priority access."
                buttonText="Join the Waitlist"
                successMessage="You're in! We'll email you when BookStreak is ready."
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-black/20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">How It Works</h2>
          <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">Turn reading into a daily habit in three simple steps</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Add a Book', description: 'Search by title or author and add whatever you\'re reading to your library. No barcode needed.', color: 'amber' },
              { step: '2', title: 'Log Your Pages', description: 'Each day, log how many pages you read. It takes seconds and builds your streak automatically.', color: 'orange' },
              { step: '3', title: 'Watch Your Streak Grow', description: 'See your progress ring fill up, hit milestones, and share your achievements with friends.', color: 'amber' },
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
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">Built for Readers, Not Reviewers</h2>
          <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">BookStreak focuses on the daily habit, not social features or reviews</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Progress Ring', description: 'A beautiful circular progress ring shows exactly how close you are to your daily page goal. It fills in real-time as you log.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> },
              { title: 'Streak Tracking', description: 'Your reading streak is front and center. Build momentum day by day and celebrate milestones along the way.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /> },
              { title: 'Reading Calendar', description: 'See your last 30 days at a glance. Each day you read lights up on the calendar so you can see your consistency.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /> },
              { title: 'AI Reading Coach', description: 'Ask anything about your reading habits and get personalized insights. Your data stays on your device — the AI just reads the stats.', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /> },
            ].map((feature, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-500/10 p-6 hover:border-amber-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">{feature.icon}</svg>
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
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to build your reading habit?</h2>
          <p className="text-foreground/70 mb-8">Join the waitlist and be the first to start streaking.</p>
          <div className="max-w-md mx-auto">
            <Waitlist listId={BOOKSTREAK_LIST_ID} source="bookstreak-bottom-cta" variant="inline" buttonText="Join Waitlist" />
          </div>
        </div>
      </section>
    </div>
  );
}
