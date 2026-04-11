'use client';

const contactBits = [
  {
    label: 'Best For',
    text: 'Questions, weird nostalgia, site feedback, tech suggestions, and passionate arguments about which format deserved better.',
  },
  {
    label: 'Response Style',
    text: 'Human, friendly, and ideally faster than a dial-up handshake trying to connect in a storm.',
  },
  {
    label: 'Bonus Points',
    text: 'If you are emailing us about a gadget your family still owns in a drawer somewhere, you are exactly our kind of person.',
  },
];

export default function Contact() {
  return (
    <>
      <style jsx>{`
        .contact-page {
          position: relative;
          min-height: 100vh;
          padding: clamp(3.5rem, 8vw, 6rem) 1rem 5rem;
          overflow: hidden;
        }

        .contact-page::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top left, rgba(47, 93, 98, 0.12), transparent 24%),
            radial-gradient(circle at bottom right, rgba(197, 111, 82, 0.1), transparent 22%);
          pointer-events: none;
        }

        .contact-shell {
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
        .info-panel,
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
          max-width: 13ch;
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
          grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
        }

        .section-title {
          position: relative;
          z-index: 1;
          margin: 0 0 1rem;
          font-size: 1.45rem;
          color: var(--ota-ink);
          letter-spacing: -0.03em;
        }

        .info-copy {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 1rem;
        }

        .info-copy p {
          margin: 0;
          color: var(--ota-muted);
          line-height: 1.82;
          text-align: left;
        }

        .email-box {
          position: relative;
          z-index: 1;
          margin-top: 1rem;
          padding: 1rem 1.05rem;
          border-radius: 20px;
          border: 1px solid var(--ota-line);
          background: rgba(255, 255, 255, 0.82);
        }

        .email-label {
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

        .email-link {
          display: inline-block;
          color: var(--ota-ink);
          font-size: clamp(1.05rem, 2.4vw, 1.4rem);
          font-weight: 700;
          text-decoration: none;
          word-break: break-word;
        }

        .email-link:hover {
          color: var(--ota-accent);
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
          .contact-page {
            padding: 2.5rem 0.85rem 4rem;
          }

          .panel {
            border-radius: 22px;
          }

          .hero-panel,
          .info-panel,
          .bits-panel {
            padding: 1.2rem;
          }
        }
      `}</style>

      <main className="contact-page">
        <div className="contact-shell">
          <section className="panel hero-panel">
            <p className="eyebrow">Contact</p>
            <h1 className="title">Get in touch like it is still 1999.</h1>
            <p className="lead">
              Got a burning question about Betamax? Want to tell us your cousin still uses a Zune?
              Need to nominate a gloriously obsolete gadget for the archive? We would genuinely love
              to hear from you.
            </p>
          </section>

          <div className="content-grid">
            <section className="panel info-panel">
              <h2 className="section-title">Send A Note</h2>
              <div className="info-copy">
                <p>
                  For questions, suggestions, nostalgic rants, corrections, or a heartfelt defense of
                  some weird gadget history left behind too soon, email us directly.
                </p>
                <p>
                  If you are writing in just to say, &quot;My family still has one of those in a drawer,&quot;
                  that absolutely counts too.
                </p>
              </div>

              <div className="email-box">
                <span className="email-label">Email</span>
                <a className="email-link" href="mailto:obsoletetecharchive@gmail.com">
                  obsoletetecharchive@gmail.com
                </a>
              </div>
            </section>

            <aside className="panel bits-panel">
              <h2 className="section-title">Quick Bits</h2>
              <div className="bits-list">
                {contactBits.map((item) => (
                  <div key={item.label} className="bit">
                    <span className="bit-label">{item.label}</span>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <p className="footer-note">
            We will get back to you faster than a dial-up handshake. Probably.
          </p>
        </div>
      </main>
    </>
  );
}
