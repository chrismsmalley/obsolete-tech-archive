'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const submitBits = [
  {
    label: 'Best Submissions',
    text: 'Forgotten gadgets, dead formats, weird accessories, and niche tech that once swore it was the future.',
  },
  {
    label: 'What To Include',
    text: 'A clear name and enough description to tell us why this thing ruled, flopped, or deserves one more weird little spotlight.',
  },
  {
    label: 'Vibe',
    text: 'Think less corporate nomination form and more "you will not believe what was sitting in my parents’ office drawer."',
  },
];

export default function SubmitArtifact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.target;
    const data = new FormData(form);

    if (data.get('nickname')) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('https://formspree.io/f/movwvbdd', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const result = await res.json();
        throw new Error(result?.error || 'Submission failed.');
      }
    } catch (err) {
      setError(err.message || 'Submission failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style jsx>{`
        .submit-page {
          position: relative;
          min-height: 100vh;
          padding: clamp(3.5rem, 8vw, 6rem) 1rem 5rem;
          overflow: hidden;
        }

        .submit-page::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top left, rgba(47, 93, 98, 0.12), transparent 24%),
            radial-gradient(circle at bottom right, rgba(197, 111, 82, 0.1), transparent 22%);
          pointer-events: none;
        }

        .submit-shell {
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
        .form-panel,
        .bits-panel,
        .thank-you-panel {
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
          max-width: 68ch;
          font-size: clamp(1rem, 2.1vw, 1.12rem);
          line-height: 1.8;
          color: var(--ota-muted);
        }

        .content-grid {
          display: grid;
          gap: 1.75rem;
          grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
        }

        .section-title {
          position: relative;
          z-index: 1;
          margin: 0 0 1rem;
          font-size: 1.45rem;
          color: var(--ota-ink);
          letter-spacing: -0.03em;
        }

        .form-copy {
          position: relative;
          z-index: 1;
          margin: 0 0 1.2rem;
          color: var(--ota-muted);
          line-height: 1.8;
          max-width: 62ch;
        }

        .submit-form {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 1rem;
        }

        .field {
          display: grid;
          gap: 0.45rem;
        }

        .field-label {
          color: var(--ota-ink);
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .field-input,
        .field-textarea {
          width: 100%;
          border: 1px solid var(--ota-line);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.84);
          color: var(--ota-ink);
          font: inherit;
          padding: 0.95rem 1rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }

        .field-input::placeholder,
        .field-textarea::placeholder {
          color: #8b8f84;
        }

        .field-input:focus,
        .field-textarea:focus {
          outline: none;
          border-color: rgba(44, 103, 112, 0.5);
          box-shadow: 0 0 0 4px rgba(47, 93, 98, 0.12);
        }

        .field-textarea {
          min-height: 160px;
          resize: vertical;
        }

        .error {
          margin: 0;
          color: #b44635;
          font-weight: 600;
        }

        .submit-button {
          justify-self: start;
          border: none;
          border-radius: 999px;
          padding: 0.9rem 1.25rem;
          background: linear-gradient(135deg, var(--ota-accent), #3e7b85);
          color: white;
          font: inherit;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
          box-shadow: 0 14px 28px rgba(44, 103, 112, 0.18);
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 18px 30px rgba(44, 103, 112, 0.22);
        }

        .submit-button:disabled {
          cursor: wait;
          opacity: 0.8;
        }

        .bits-list {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 1rem;
        }

        .bit {
          padding: 1rem 1rem 1.05rem;
          border-radius: 20px;
          border: 1px solid var(--ota-line);
          background: rgba(255, 255, 255, 0.78);
        }

        .bit-label {
          display: inline-flex;
          align-items: center;
          padding: 0.35rem 0.75rem;
          margin-bottom: 0.75rem;
          border-radius: 999px;
          background: var(--ota-accent-soft);
          color: var(--ota-accent);
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .bit p {
          margin: 0;
          color: var(--ota-muted);
          line-height: 1.72;
          text-align: left;
        }

        .thank-you-panel {
          text-align: center;
        }

        .thank-you-content {
          position: relative;
          z-index: 1;
          max-width: 620px;
          margin: 0 auto;
          display: grid;
          gap: 1rem;
          justify-items: center;
        }

        .thank-you-title {
          margin: 0;
          color: var(--ota-ink);
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1.05;
          font-family: "Courier New", Courier, monospace;
        }

        .thank-you-copy {
          margin: 0;
          color: var(--ota-muted);
          line-height: 1.8;
        }

        .home-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 1.15rem;
          border-radius: 999px;
          text-decoration: none;
          background: var(--ota-accent-soft);
          color: var(--ota-accent);
          font-weight: 700;
        }

        .footer-note {
          text-align: center;
          color: var(--ota-muted);
          font-size: 0.95rem;
          line-height: 1.7;
          padding-top: 0.25rem;
        }

        @media (max-width: 899px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .submit-page {
            padding: 2.5rem 0.85rem 4rem;
          }

          .panel {
            border-radius: 22px;
          }

          .hero-panel,
          .form-panel,
          .bits-panel,
          .thank-you-panel {
            padding: 1.2rem;
          }

          .submit-button {
            width: 100%;
            justify-self: stretch;
          }
        }
      `}</style>

      <main className="submit-page">
        <div className="submit-shell">
          {submitted ? (
            <section className="panel thank-you-panel">
              <div className="thank-you-content">
                <p className="eyebrow">Transmission Received</p>
                <h1 className="thank-you-title">Thank you for feeding the archive.</h1>
                <p className="thank-you-copy">
                  Your artifact suggestion is in. We will give it a proper look and see whether it
                  belongs in our growing pile of glorious, questionable, and deeply lovable obsolete
                  tech.
                </p>
                <Link href="/" className="home-link">
                  ← Return to Home
                </Link>
              </div>
            </section>
          ) : (
            <>
              <section className="panel hero-panel">
                <p className="eyebrow">Submit An Artifact</p>
                <h1 className="title">Got a dusty gadget with a story? Send it in.</h1>
                <p className="lead">
                  If there is a forgotten device, failed format, or weird piece of tech history you
                  think deserves a spot in the archive, this is the place. Give us the basics and a
                  good description of why it mattered, flopped, or still deserves respect.
                </p>
              </section>

              <div className="content-grid">
                <section className="panel form-panel">
                  <h2 className="section-title">Nominate Something Delightfully Outdated</h2>
                  <p className="form-copy">
                    Tell us what the artifact is and why it should be remembered. The more specific,
                    weird, or nostalgic the pitch, the better.
                  </p>

                  <form className="submit-form" onSubmit={handleSubmit} encType="multipart/form-data">
                    <input type="text" name="nickname" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                    <label className="field">
                      <span className="field-label">Artifact Name</span>
                      <input
                        className="field-input"
                        type="text"
                        name="name"
                        placeholder="Laser keyboard, transparent landline, cursed MP3 player..."
                        required
                      />
                    </label>

                    <label className="field">
                      <span className="field-label">Why It Matters</span>
                      <textarea
                        className="field-textarea"
                        name="description"
                        placeholder="Tell us what it was, why people used it, why it disappeared, or why you still have feelings about it."
                        required
                      />
                    </label>

                    {error && <p className="error">{error}</p>}

                    <button className="submit-button" type="submit" disabled={loading}>
                      {loading ? 'Submitting...' : 'Submit Artifact'}
                    </button>
                  </form>
                </section>

                <aside className="panel bits-panel">
                  <h2 className="section-title">Quick Bits</h2>
                  <div className="bits-list">
                    {submitBits.map((item) => (
                      <div key={item.label} className="bit">
                        <span className="bit-label">{item.label}</span>
                        <p>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </aside>
              </div>
            </>
          )}

          <p className="footer-note">
            Every great archive starts with somebody saying, &quot;Wait, does anyone else remember this thing?&quot;
          </p>
        </div>
      </main>
    </>
  );
}
