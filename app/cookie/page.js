'use client';

import Link from 'next/link';

const cookieBits = [
  {
    label: 'Essential',
    text: 'The basic site-running stuff. The digital equivalent of making sure the lights are on and the floppy drive still spins.',
  },
  {
    label: 'Analytics',
    text: 'These help us understand what people read, click, and lovingly revisit so we can keep polishing the archive.',
  },
  {
    label: 'Ad Tech',
    text: 'Third-party services like Google may use cookies or similar tools to help with measurement and, where applicable, relevant advertising.',
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <style jsx>{`
        .cookie-page {
          position: relative;
          min-height: 100vh;
          padding: clamp(3.5rem, 8vw, 6rem) 1rem 5rem;
          overflow: hidden;
        }

        .cookie-page::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top left, rgba(47, 93, 98, 0.12), transparent 24%),
            radial-gradient(circle at bottom right, rgba(197, 111, 82, 0.1), transparent 22%);
          pointer-events: none;
        }

        .cookie-shell {
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
        .policy-panel,
        .bits-panel {
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
          max-width: 12ch;
        }

        .lead {
          margin: 1.2rem 0 0;
          max-width: 70ch;
          font-size: clamp(1rem, 2.1vw, 1.12rem);
          line-height: 1.8;
          color: var(--ota-muted);
        }

        .content-grid {
          display: grid;
          gap: 1.75rem;
          grid-template-columns: minmax(0, 1.25fr) minmax(280px, 0.75fr);
        }

        .section-title {
          position: relative;
          z-index: 1;
          margin: 0 0 1rem;
          font-size: 1.45rem;
          color: var(--ota-ink);
          letter-spacing: -0.03em;
        }

        .policy-copy {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 1.5rem;
        }

        .policy-block {
          display: grid;
          gap: 0.45rem;
        }

        .policy-block h2 {
          margin: 0;
          color: var(--ota-ink);
          font-size: 1.05rem;
          letter-spacing: -0.02em;
        }

        .policy-block p {
          margin: 0;
          color: var(--ota-muted);
          line-height: 1.82;
          text-align: left;
        }

        .policy-block a,
        .footer-note a {
          color: var(--ota-accent);
          text-decoration: none;
          font-weight: 600;
        }

        .policy-block a:hover,
        .footer-note a:hover {
          text-decoration: underline;
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
          .cookie-page {
            padding: 2.5rem 0.85rem 4rem;
          }

          .panel {
            border-radius: 22px;
          }

          .hero-panel,
          .policy-panel,
          .bits-panel {
            padding: 1.2rem;
          }
        }
      `}</style>

      <main className="cookie-page">
        <div className="cookie-shell">
          <section className="panel hero-panel">
            <p className="eyebrow">Cookie Policy</p>
            <h1 className="title">The digital-cookie version, not the warm tray from the kitchen.</h1>
            <p className="lead">
              This page explains how Obsolete Tech Archive uses cookies and similar technologies,
              why they show up, and what your options are if you would prefer to keep your browser
              a little less crumb-covered.
            </p>
          </section>

          <div className="content-grid">
            <section className="panel policy-panel">
              <h2 className="section-title">How It Works</h2>
              <div className="policy-copy">
                <div className="policy-block">
                  <h2>What Are Cookies?</h2>
                  <p>
                    Cookies are small data files placed on your computer or mobile device when you
                    visit a website. They help sites remember useful bits of information and make the
                    whole experience run more smoothly.
                  </p>
                </div>

                <div className="policy-block">
                  <h2>Why Do We Use Them?</h2>
                  <p>
                    We use both first-party and third-party cookies for a few practical reasons. Some
                    are essential for the site to function properly. Others help us understand
                    performance, visitor behavior, and what parts of the archive people keep coming
                    back to.
                  </p>
                  <p>
                    Third-party services like Google may also use cookies, web beacons, or similar
                    tracking tools to support analytics and, where applicable, advertising functions.
                  </p>
                </div>

                <div className="policy-block">
                  <h2>Controlling Cookies</h2>
                  <p>
                    You can accept or reject cookies through your browser settings. You may also see a
                    cookie banner on the site that lets you manage consent directly. If you disable
                    some cookies, parts of the experience may behave a little less gracefully.
                  </p>
                </div>

                <div className="policy-block">
                  <h2>Updates To This Policy</h2>
                  <p>
                    We may update this Cookie Policy from time to time, especially if site features,
                    analytics tools, or ad services change. When that happens, we will update this
                    page so you are not left guessing.
                  </p>
                </div>
              </div>
            </section>

            <aside className="panel bits-panel">
              <h2 className="section-title">Quick Bits</h2>
              <div className="bits-list">
                {cookieBits.map((item) => (
                  <div key={item.label} className="bit">
                    <span className="bit-label">{item.label}</span>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <p className="footer-note">
            Questions about cookies, tracking, or anything similarly glamorous? Head over to the{' '}
            <Link href="/contact">Contact Page</Link>.
          </p>
        </div>
      </main>
    </>
  );
}
