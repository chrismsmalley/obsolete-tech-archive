'use client';

import Link from 'next/link';

const privacyBits = [
  {
    label: 'What We Collect',
    text: 'Very little. We are more interested in old gadgets than in building a secret dossier on your browser habits.',
  },
  {
    label: 'What We Do Not Do',
    text: 'We do not sell, rent, or trade your personal information. You are a visitor, not an inventory item.',
  },
  {
    label: 'What May Show Up',
    text: 'Basic analytics, cookies, and third-party services like Google may appear to help the site function, measure traffic, or support ads.',
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <style jsx>{`
        .privacy-page {
          position: relative;
          min-height: 100vh;
          padding: clamp(3.5rem, 8vw, 6rem) 1rem 5rem;
          overflow: hidden;
        }

        .privacy-page::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top left, rgba(47, 93, 98, 0.12), transparent 24%),
            radial-gradient(circle at bottom right, rgba(197, 111, 82, 0.1), transparent 22%);
          pointer-events: none;
        }

        .privacy-shell {
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
          .privacy-page {
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

      <main className="privacy-page">
        <div className="privacy-shell">
          <section className="panel hero-panel">
            <p className="eyebrow">Privacy Policy</p>
            <h1 className="title">The short version: we are into obsolete tech, not surveillance drama.</h1>
            <p className="lead">
              We respect your privacy almost as much as we respect a well-preserved floppy disk.
              This page explains what information may be collected, how it is used, and what we do
              not do with it.
            </p>
          </section>

          <div className="content-grid">
            <section className="panel policy-panel">
              <h2 className="section-title">How We Handle Your Info</h2>
              <div className="policy-copy">
                <div className="policy-block">
                  <h2>What We Collect</h2>
                  <p>
                    Practically nothing glamorous. If anything is collected, it is usually the basic
                    technical stuff that comes with running a website, such as analytics data,
                    browser-level information, or the occasional message you intentionally send us.
                  </p>
                </div>

                <div className="policy-block">
                  <h2>Cookies? Only The Digital Kind</h2>
                  <p>
                    The site may use cookies and similar tools to help it run properly and to tell us
                    how many people still care deeply about MiniDiscs, pagers, and other glorious
                    relics.
                  </p>
                  <p>
                    Third-party services like Google may also use cookies, web beacons, or related
                    technologies for analytics, ad measurement, or similar functions. You can read
                    more about how Google uses data here:{' '}
                    <a
                      href="https://policies.google.com/technologies/partner-sites"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      policies.google.com/technologies/partner-sites
                    </a>
                    .
                  </p>
                </div>

                <div className="policy-block">
                  <h2>Sharing Your Info</h2>
                  <p>
                    Nope. Nada. Zilch. We do not sell, rent, or trade your information. You are not a
                    collectible. You are just someone with excellent taste in outdated tech.
                  </p>
                </div>

                <div className="policy-block">
                  <h2>Data Security</h2>
                  <p>
                    We take data security seriously and try to keep things locked down as sensibly as
                    possible. No site is magic, but we are not casually tossing your information into
                    the digital void either.
                  </p>
                </div>

                <div className="policy-block">
                  <h2>Changes To This Policy</h2>
                  <p>
                    If this policy changes, we will update this page. We will try our best not to make
                    that update read like a punishment.
                  </p>
                </div>
              </div>
            </section>

            <aside className="panel bits-panel">
              <h2 className="section-title">Quick Bits</h2>
              <div className="bits-list">
                {privacyBits.map((item) => (
                  <div key={item.label} className="bit">
                    <span className="bit-label">{item.label}</span>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <p className="footer-note">
            Questions, concerns, or a sudden urge to talk about pagers? Visit the{' '}
            <Link href="/contact">Contact Page</Link>.
          </p>
        </div>
      </main>
    </>
  );
}
