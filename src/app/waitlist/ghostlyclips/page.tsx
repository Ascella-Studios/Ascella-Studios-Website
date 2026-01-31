import type { Metadata } from 'next';
import Waitlist from '@/components/Waitlist';

export const metadata: Metadata = {
  title: 'GhostlyClips - AI-Powered Faceless Video Generator',
  description:
    'Generate faceless short-form videos for TikTok and Reels in minutes. Enter a topic, pick a vibe, and let AI handle the script, voiceover, captions, and editing.',
  openGraph: {
    title: 'GhostlyClips - AI-Powered Faceless Video Generator',
    description:
      'Generate faceless short-form videos for TikTok and Reels in minutes. No editing skills or camera required.',
    url: 'https://ascellastudios.com/waitlist/ghostlyclips',
  },
};

// HubSpot static list ID for GhostlyClips waitlist
const GHOSTLYCLIPS_LIST_ID = '6';

export default function GhostlyClipsWaitlistPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-xs font-medium border border-purple-500/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
                </span>
                Coming Soon
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Create faceless{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  viral videos
                </span>
              </h1>

              <p className="text-xl text-foreground/80 mb-8">
                Enter a topic, pick a vibe, and get a download-ready video in minutes. AI handles the script, voiceover, captions, and editing—no camera or editing skills required.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'AI-generated scripts optimized for engagement',
                  'Natural voiceovers with multiple voice styles',
                  'Animated captions with TikTok-style effects',
                  'Complete videos ready for TikTok & Reels',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/70">
                    <svg className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-foreground/50">
                Join 500+ creators waiting for early access
              </p>
            </div>

            {/* Right: Waitlist Form */}
            <div>
              <Waitlist
                listId={GHOSTLYCLIPS_LIST_ID}
                source="ghostlyclips-landing"
                title="Get Early Access"
                description="Be the first to try GhostlyClips. Early supporters get lifetime discounts and priority access."
                buttonText="Join the Waitlist"
                successMessage="You're in! We'll email you when GhostlyClips is ready."
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-black/20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">
            How It Works
          </h2>
          <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
            From idea to viral video in a simple 6-step wizard
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Enter Your Topic',
                description: 'Tell us what your video is about—any niche, any subject. Our AI will craft a compelling script.',
                color: 'purple',
              },
              {
                step: '2',
                title: 'Pick Your Vibe',
                description: 'Choose your voice style, background visuals, and caption effects to match your brand aesthetic.',
                color: 'pink',
              },
              {
                step: '3',
                title: 'Download & Post',
                description: 'Get a fully rendered vertical video with AI voiceover, animated captions, and background media—ready to upload.',
                color: 'purple',
              },
            ].map((item) => (
              <div
                key={item.step}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-${item.color}-500/10 to-${item.color}-500/5 border border-${item.color}-500/20 p-6 hover:border-${item.color}-500/40 transition-all duration-300`}
              >
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
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">
            Everything Handled for You
          </h2>
          <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
            No video editing skills, on-camera presence, or expensive tools required
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'AI Script Generation',
                description: 'Our AI writes engaging scripts optimized for short-form content. Just enter your topic and watch the magic happen.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                ),
              },
              {
                title: 'Natural Voiceovers',
                description: 'Choose from multiple AI voice styles that sound natural and engaging. No microphone or recording needed.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                ),
              },
              {
                title: 'Animated Captions',
                description: 'TikTok-style animated captions automatically synced to the voiceover. Customizable colors and effects.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                ),
              },
              {
                title: 'Background Media',
                description: 'AI composites your content over engaging background videos and visuals that match your vibe.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                ),
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/10 p-6 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {feature.icon}
                    </svg>
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
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to create viral content?
          </h2>
          <p className="text-foreground/70 mb-8">
            Join the waitlist and be the first to generate faceless videos that get views.
          </p>
          <div className="max-w-md mx-auto">
            <Waitlist
              listId={GHOSTLYCLIPS_LIST_ID}
              source="ghostlyclips-bottom-cta"
              variant="inline"
              buttonText="Join Waitlist"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
