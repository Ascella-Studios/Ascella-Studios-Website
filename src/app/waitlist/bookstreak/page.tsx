import type { Metadata } from 'next';
import Waitlist from '@/components/Waitlist';

export const metadata: Metadata = {
  title: 'BookStreak - Build Your Daily Reading Habit',
  description:
    'Track your reading streak, log pages daily, and build a habit that sticks. A reading tracker focused on consistency, not reviews.',
  openGraph: {
    title: 'BookStreak - Build Your Daily Reading Habit',
    description:
      'Track your reading streak, log pages daily, and build a habit that sticks. No social feeds, no forced timers — just you and your books.',
    url: 'https://ascellastudios.com/waitlist/bookstreak',
  },
};

const LIST_ID = '11';

export default function BookStreakWaitlistPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
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
                  reading habit
                </span>
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                Log pages in seconds, track your streak, and watch your reading grow. No social feeds, no forced timers, no reviews to write — just you and your books.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Daily page logging in two taps',
                  'Streak tracking with milestone celebrations',
                  'Weekly charts showing your reading progress',
                  'Shareable streak cards for Instagram Stories',
                  'AI-powered reading insights (Pro)',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/70">
                    <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-foreground/50">Join readers building their daily page habit</p>
            </div>
            <div>
              <Waitlist
                listId={LIST_ID}
                source="bookstreak-landing"
                title="Get Early Access"
                description="Be the first to try BookStreak. Early supporters get a free month of Pro when we launch."
                buttonText="Join the Waitlist"
                successMessage="You're in! We'll email you when BookStreak is ready."
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-black/20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">How It Works</h2>
          <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">Reading more starts with one page a day</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Add a Book', description: 'Scan the ISBN or type the title. BookStreak pulls in the cover and details automatically.', color: 'amber' },
              { step: '2', title: 'Log Your Pages', description: 'Open the app, tap your book, enter the page you\'re on. Takes two seconds. Done for the day.', color: 'orange' },
              { step: '3', title: 'Watch Your Streak Grow', description: 'See your daily streak climb, track your weekly progress with charts, and celebrate milestones along the way.', color: 'amber' },
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

      {/* Features Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">Built for the Habit, Not the Review</h2>
          <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">Everything you need to read more consistently — nothing you don't</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Streak Tracking',
                description: 'See your current and best reading streaks at a glance. Get a gentle nudge before your streak breaks. Celebrate milestones at 7, 30, and 100 days.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />,
              },
              {
                title: 'Weekly Reading Charts',
                description: 'Visual bar charts showing your pages per day over the past week. See patterns in your reading and stay motivated by your progress.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
              },
              {
                title: 'Shareable Milestone Cards',
                description: 'Hit a streak milestone or finish a book? Share a beautifully designed card to Instagram Stories, iMessage, or anywhere. Spotify Wrapped-style, not a screenshot.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />,
              },
              {
                title: 'AI Reading Insights',
                description: 'Get personalized tips based on your reading patterns, goals, and streaks. Powered by AI, tailored to your habits. Available with BookStreak Pro.',
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
              },
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

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 bg-black/20">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to build your reading habit?</h2>
          <p className="text-foreground/70 mb-8">Join the waitlist and be the first to start tracking your daily pages.</p>
          <div className="max-w-md mx-auto">
            <Waitlist listId={LIST_ID} source="bookstreak-bottom-cta" variant="inline" buttonText="Join Waitlist" />
          </div>
        </div>
      </section>
    </div>
  );
}
