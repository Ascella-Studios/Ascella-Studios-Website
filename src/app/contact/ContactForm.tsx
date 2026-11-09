'use client';

import { useState, FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import Button from '@/components/Button';
import { CONTACT_TOPICS, isContactTopic, type ContactTopic } from '@/lib/contact';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const inputClasses =
  'w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-sky focus:ring-2 focus:ring-sky/20 outline-none transition-colors';

export default function ContactForm() {
  const topicParam = useSearchParams().get('topic');
  const initialTopic: ContactTopic | '' = isContactTopic(topicParam) ? topicParam : '';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: initialTopic,
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setFormData({ name: '', email: '', topic: initialTopic, subject: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-mint/30 bg-mint/5 p-8">
        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-mint/20 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-mint"
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
          <h3 className="text-xl font-semibold text-foreground mb-2">Message sent</h3>
          <p className="text-foreground/70 mb-6">
            Thanks for reaching out. We&apos;ll get back to you soon.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="text-accent hover:underline transition-colors font-medium"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {status === 'error' && (
          <div role="alert" className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm">
            {errorMessage}
          </div>
        )}

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClasses}
            placeholder="Your name"
            disabled={status === 'submitting'}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClasses}
            placeholder="your@email.com"
            disabled={status === 'submitting'}
          />
        </div>

        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-foreground mb-2">
            What&apos;s this about?
          </label>
          <select
            id="topic"
            name="topic"
            required
            value={formData.topic}
            onChange={(e) => setFormData({ ...formData, topic: e.target.value as ContactTopic })}
            className={`${inputClasses} appearance-none bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394A3B8' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")",
            }}
            disabled={status === 'submitting'}
          >
            <option value="" disabled>
              Choose a topic
            </option>
            {Object.entries(CONTACT_TOPICS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Subject <span className="text-foreground/50 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className={inputClasses}
            placeholder="A few words"
            disabled={status === 'submitting'}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`${inputClasses} resize-none`}
            placeholder="Tell us a little about your business or idea"
            disabled={status === 'submitting'}
          />
        </div>

        <Button type="submit" variant="gradient" disabled={status === 'submitting'} className="w-full">
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
              Sending...
            </>
          ) : (
            'Send message'
          )}
        </Button>
      </form>
    </div>
  );
}
