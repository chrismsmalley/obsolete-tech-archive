'use client';

import { useState } from 'react';

const newsletterPlans = [
  {
    issue: 'Issue 001',
    date: 'Placeholder Date',
    title: 'The Gadgets That Absolutely Thought They Were The Future',
    blurb:
      'Placeholder intro copy for your first newsletter. This is where a punchy summary would go about overconfident gadgets, ambitious flops, and the kind of future-tech swagger that aged in extremely funny ways.',
  },
  {
    issue: 'Issue 002',
    date: 'Placeholder Date',
    title: 'Formats, Fads, And Other Plastic Disasters',
    blurb:
      'Placeholder copy for a format-focused issue. Think discs, tapes, cartridges, cards, and all the media formats that burned bright, broke hearts, and left behind drawers full of obsolete nonsense.',
  },
  {
    issue: 'Issue 003',
    date: 'Placeholder Date',
    title: 'Internet Relics From The Weird Web Years',
    blurb:
      'Placeholder copy for a web-culture issue. This spot can tease dead platforms, strange interfaces, and the gloriously less polished internet that raised a whole generation of weirdos.',
  },
];

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('email', email);

      const response = await fetch('https://formspree.io/f/manjnjwb', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      const data = await response.json();

      if (data.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style jsx>{`
        .newsletter-page {
          position: relative;
          min-height: 100vh;
          padding: clamp(3.5rem, 8vw, 6rem) 1rem 5rem;
          overflow: hidden;
        }

        .newsletter-page::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top left, rgba(47, 93, 98, 0.12), transparent 24%),
            radial-gradient(circle at bottom right, rgba(197, 111, 82, 0.1), transparent 22%);
          pointer-events: none;
        }

        .newsletter-shell {
          position: relative;
          z-index: 1;
          width: min(1120px, 100%);
          margin: 0 auto;
          display: grid;
          gap: 1.75rem;
        }

        .panel {
          position: relative;
          overflow: hidden;
          border: 1px solid var(--ota-line);
          border-radius: 28px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(249, 251, 255, 0.9));
          box-shadow: var(--ota-shadow);
        }

        .panel::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(transparent, rgba(255, 255, 255, 0.22)),
            radial-gradient(circle at top right, rgba(47, 93, 98, 0.1), transparent 28%);
          pointer-events: none;
        }

        .panel::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--ota-accent), rgba(197, 111, 82, 0.84));
        }

        .hero-panel,
        .signup-panel,
        .issues-panel {
          padding: clamp(1.35rem, 3vw, 2.2rem);
        }

        .eyebrow {
          margin: 0 0 0.9rem;
          font-size: 0.72rem;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--ota-accent);
        }

        .title {
          margin: 0;
          color: var(--ota-ink);
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          line-height: 1;
          font-weight: 700;
          font-family: "Courier New", Courier, monospace;
          max-width: 14ch;
        }

        .lead {
          margin: 1.2rem 0 0;
          max-width: 70ch;
          font-size: clamp(1rem, 2.1vw, 1.12rem);
          line-height: 1.8;
          color: var(--ota-muted);
        }

        .top-grid {
          display: grid;
          gap: 1.75rem;
          grid-template-columns: 1fr;
        }

        .section-title {
          position: relative;
          z-index: 1;
          margin: 0 0 1rem;
          font-size: 1.45rem;
          color: var(--ota-ink);
          letter-spacing: -0.03em;
        }

        .signup-copy {
          position: relative;
          z-index: 1;
          margin: 0 0 1.15rem;
          color: var(--ota-muted);
          line-height: 1.8;
          max-width: 62ch;
        }

        .signup-form {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 0.9rem;
        }

        .email-input {
          width: 100%;
          border: 1px solid var(--ota-line);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.88);
          color: var(--ota-ink);
          font: inherit;
          padding: 0.95rem 1rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .email-input::placeholder {
          color: #8b8f84;
        }

        .email-input:focus {
          outline: none;
          border-color: rgba(44, 103, 112, 0.5);
          box-shadow: 0 0 0 4px rgba(47, 93, 98, 0.12);
        }

        .signup-button {
          justify-self: start;
          border: none;
          border-radius: 999px;
          padding: 0.9rem 1.2rem;
          background: linear-gradient(135deg, var(--ota-accent), #3e7b85);
          color: #fff;
          font: inherit;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
          box-shadow: 0 14px 28px rgba(44, 103, 112, 0.18);
        }

        .signup-button:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 18px 30px rgba(44, 103, 112, 0.22);
        }

        .signup-button:disabled {
          cursor: wait;
          opacity: 0.8;
        }

        .success,
        .error {
          margin: 0;
          font-weight: 600;
        }

        .success {
          color: var(--ota-accent);
        }

        .error {
          color: #b44635;
        }

        .issues-grid {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .issue-card {
          padding: 1.1rem;
          border-radius: 22px;
          border: 1px solid var(--ota-line);
          background: rgba(255, 255, 255, 0.8);
          display: grid;
          gap: 0.75rem;
        }

        .issue-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .issue-number {
          color: var(--ota-accent);
          font-size: 0.78rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .issue-date {
          display: inline-flex;
          align-items: center;
          padding: 0.35rem 0.7rem;
          border-radius: 999px;
          background: rgba(197, 111, 82, 0.12);
          color: #a55d45;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          font-weight: 700;
        }

        .issue-title {
          margin: 0;
          color: var(--ota-ink);
          font-size: 1.15rem;
          line-height: 1.35;
        }

        .issue-blurb {
          margin: 0;
          color: var(--ota-muted);
          line-height: 1.72;
        }

        .footer-note {
          text-align: center;
          color: var(--ota-muted);
          font-size: 0.95rem;
          line-height: 1.7;
          padding-top: 0.25rem;
        }

        @media (max-width: 899px) {
          .top-grid,
          .issues-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .newsletter-page {
            padding: 2.5rem 0.85rem 4rem;
          }

          .panel {
            border-radius: 22px;
          }

          .hero-panel,
          .signup-panel,
          .issues-panel {
            padding: 1.2rem;
          }

          .signup-button {
            width: 100%;
            justify-self: stretch;
          }
        }
      `}</style>

      <main className="newsletter-page">
        <div className="newsletter-shell">
          <section className="panel hero-panel">
            <p className="eyebrow">Newsletter</p>
            <h1 className="title">Old tech, odd stories, and lovingly curated inbox clutter.</h1>
            <p className="lead">
              This is where the archive gets a little more editorial. The newsletter will be home to
              themed deep dives, roundup-style dispatches, weird tech history, and the kind of
              lovingly opinionated writing that does not always fit on a card.
            </p>
          </section>

          <div className="top-grid">
            <section className="panel signup-panel">
              <h2 className="section-title">Subscribe</h2>
              <p className="signup-copy">
                Sign up to get occasional newsletter drops, new archive highlights, and future issues
                about dead formats, strange gadgets, and internet relics that should not be forgotten.
              </p>

              {submitted ? (
                <p className="success">Thanks. You&apos;re on the list now.</p>
              ) : (
                <form className="signup-form" onSubmit={handleSubmit}>
                  <input
                    className="email-input"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button className="signup-button" type="submit" disabled={loading}>
                    {loading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
              )}

              {error && <p className="error">{error}</p>}
            </section>
          </div>

          <section className="panel issues-panel">
            <h2 className="section-title">Newsletters</h2>
            <div className="issues-grid">
              {newsletterPlans.map((issue) => (
                <article key={issue.issue} className="issue-card">
                  <div className="issue-meta">
                    <span className="issue-number">{issue.issue}</span>
                    <span className="issue-date">{issue.date}</span>
                  </div>
                  <h3 className="issue-title">{issue.title}</h3>
                  <p className="issue-blurb">{issue.blurb}</p>
                </article>
              ))}
            </div>
          </section>

          <p className="footer-note">
            The plan is simple: fewer emails, better ones, and at least a little justified nostalgia.
          </p>
        </div>
      </main>
    </>
  );
}
