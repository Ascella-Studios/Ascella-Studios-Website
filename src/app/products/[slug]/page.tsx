"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface LandingPageData {
  id: string;
  idea_id: string;
  product_name: string;
  slug: string;
  headline: string;
  subheadline: string;
  pain_points: string[];
  features: string[];
  cta_text: string;
  social_proof: string | null;
  status: string;
  meta: {
    title: string;
    target_audience: string;
    score: number;
  };
}

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [data, setData] = useState<LandingPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        // Load from public data directory or API
        const res = await fetch(`/data/landing-pages/${slug}.json`);
        if (!res.ok) {
          throw new Error("Landing page not found");
        }
        const pageData = await res.json();
        setData(pageData);

        // Track impression
        await fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "impression",
            idea_id: pageData.idea_id,
            slug: pageData.slug,
          }),
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load");
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      loadData();
    }
  }, [slug]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !data) return;

    setSubmitting(true);
    try {
      await fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "signup",
          idea_id: data.idea_id,
          slug: data.slug,
          email,
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Signup failed:", err);
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F172A]">
        <div className="animate-pulse text-[#F8FAFC] text-xl">Loading...</div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F172A]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#F8FAFC] mb-4">Page Not Found</h1>
          <p className="text-slate-400">{error || "This landing page doesn't exist."}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Hero Section */}
      <section className="pt-16 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {data.social_proof && (
            <p className="text-[#2DD4BF] text-sm font-medium mb-6 uppercase tracking-wider">
              {data.social_proof}
            </p>
          )}

          <h1 className="text-4xl md:text-6xl font-bold text-[#F8FAFC] mb-6 leading-tight">
            {data.headline}
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto">
            {data.subheadline}
          </p>

          {/* Email Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-[#F8FAFC] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3 bg-[#38BDF8] hover:bg-[#38BDF8]/80 text-[#0F172A] font-semibold rounded-lg transition-colors disabled:opacity-50"
                >
                  {submitting ? "..." : data.cta_text}
                </button>
              </div>
              <p className="text-slate-500 text-sm mt-3">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto bg-[#4ADE80]/20 border border-[#4ADE80]/30 rounded-lg p-6">
              <p className="text-[#4ADE80] font-semibold text-lg">
                You're on the list!
              </p>
              <p className="text-slate-300 mt-2">
                We'll notify you when we launch.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#F8FAFC] text-center mb-10">
            Sound familiar?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.pain_points.map((pain, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10"
              >
                <span className="text-red-400 text-2xl">✗</span>
                <p className="text-slate-300">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#F8FAFC] text-center mb-10">
            Here's how we solve it
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-lg bg-[#2DD4BF]/10 border border-[#2DD4BF]/20"
              >
                <span className="text-[#4ADE80] text-2xl">✓</span>
                <p className="text-slate-200">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">
            Ready to get started?
          </h2>
          <p className="text-slate-300 mb-8">
            Join the waitlist and be the first to know when we launch.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-[#F8FAFC] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3 bg-[#38BDF8] hover:bg-[#38BDF8]/80 text-[#0F172A] font-semibold rounded-lg transition-colors disabled:opacity-50"
                >
                  {submitting ? "..." : data.cta_text}
                </button>
              </div>
            </form>
          ) : (
            <p className="text-[#4ADE80] font-semibold">
              Thanks for signing up!
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
