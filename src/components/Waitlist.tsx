'use client';

import { useState, FormEvent } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface WaitlistProps {
  listId: string;
  source?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  successMessage?: string;
  className?: string;
  variant?: 'default' | 'compact' | 'inline';
}

export default function Waitlist({
  listId,
  source,
  title = 'Get Early Access',
  description = 'Be the first to know when we launch.',
  buttonText = 'Join Waitlist',
  successMessage = "You're on the list! We'll notify you when we launch.",
  className = '',
  variant = 'default',
}: WaitlistProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, listId, source }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      );
    }
  };

  // Success state
  if (status === 'success') {
    return (
      <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-mint/10 to-mint/5 border border-mint/20 p-6 ${className}`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-mint/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-mint/20 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-mint"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-foreground font-medium mb-1">You&apos;re in!</p>
          <p className="text-foreground/70 text-sm">{successMessage}</p>
        </div>
      </div>
    );
  }

  // Inline variant - single row form
  if (variant === 'inline') {
    return (
      <div className={className}>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === 'submitting'}
            className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-sky focus:ring-2 focus:ring-sky/20 outline-none transition-colors disabled:opacity-70"
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="px-6 py-3 bg-gradient-to-r from-sky via-teal to-mint text-white font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap flex items-center justify-center gap-2"
          >
            {status === 'submitting' ? (
              <>
                <svg
                  className="animate-spin h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Joining...
              </>
            ) : (
              buttonText
            )}
          </button>
        </form>
        {status === 'error' && (
          <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
        )}
      </div>
    );
  }

  // Compact variant - small card
  if (variant === 'compact') {
    return (
      <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky/10 to-teal/5 border border-sky/20 p-5 ${className}`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-sky/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative">
          <p className="text-foreground font-medium mb-3">{title}</p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={status === 'submitting'}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:border-sky focus:ring-2 focus:ring-sky/20 outline-none transition-colors disabled:opacity-70"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full px-4 py-2.5 bg-gradient-to-r from-sky via-teal to-mint text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'submitting' ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Joining...
                </>
              ) : (
                buttonText
              )}
            </button>
            {status === 'error' && (
              <p className="text-xs text-red-500">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    );
  }

  // Default variant - full card with title and description
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky/10 to-teal/5 border border-sky/20 p-6 ${className}`}>
      <div className="absolute top-0 right-0 w-48 h-48 bg-sky/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      <div className="relative">
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-foreground/70 text-sm mb-4">{description}</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          {status === 'error' && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm">
              {errorMessage}
            </div>
          )}

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === 'submitting'}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-sky focus:ring-2 focus:ring-sky/20 outline-none transition-colors disabled:opacity-70"
          />

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full px-6 py-3 bg-gradient-to-r from-sky via-teal to-mint text-white font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === 'submitting' ? (
              <>
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Joining...
              </>
            ) : (
              buttonText
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
