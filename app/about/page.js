'use client';

import React from 'react';

const aboutHighlights = [
  {
    label: 'What We Hoard',
    text: 'Forgotten gadgets, doomed formats, weird little side quests of tech history, and the occasional invention that absolutely meant well.',
  },
  {
    label: 'Why It Matters',
    text: 'Because old tech is not just junk with a power cord. It is ambition, design, marketing hype, and human chaos in physical form.',
  },
  {
    label: 'Mood',
    text: 'Less dusty museum plaque. More friend pointing at a MiniDisc player and saying, "You know this thing kind of ruled."',
  },
];

export default function AboutPage() {
  return (
    <>
      <style jsx>{`
        .about-page {
          position: relative;
          min-height: 100vh;
          padding: clamp(3.5rem, 8vw, 6rem) 1rem 5rem;
          overflow: hidden;
        }

        .about-page::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top left, rgba(47, 93, 98, 0.12), transparent 24%),
            radial-gradient(circle at bottom right, rgba(197, 111, 82, 0.1), transparent 22%);
          pointer-events: none;
        }

        .about-shell {
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

        .hero-panel {
          padding: clamp(1.5rem, 3vw, 2.75rem);
        }

        .hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 2rem;
          align-items: start;
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
          font-size: clamp(2.3rem, 5vw, 4rem);
          line-height: 0.98;
          font-weight: 700;
          font-family: "Courier New", Courier, monospace;
        }

        .lead {
          margin: 1.35rem 0 0;
          max-width: 66ch;
          font-size: clamp(1rem, 2.2vw, 1.2rem);
          line-height: 1.8;
          color: var(--ota-muted);
        }

        .hero-aside {
          display: grid;
          gap: 0.9rem;
        }

        .mini-card {
          padding: 1rem 1.05rem;
          border-radius: 20px;
          border: 1px solid var(--ota-line);
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(10px);
        }

        .mini-card-label {
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

        .mini-card p {
          margin: 0;
          color: var(--ota-muted);
          line-height: 1.7;
        }

        .content-grid {
          display: grid;
          gap: 1.75rem;
          grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
        }

        .story-panel,
        .highlights-panel {
          padding: clamp(1.35rem, 3vw, 2rem);
        }

        .section-title {
          margin: 0 0 1rem;
          font-size: 1.45rem;
          color: var(--ota-ink);
          letter-spacing: -0.03em;
        }

        .story-copy {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 1rem;
        }

        .story-copy p {
          margin: 0;
          color: var(--ota-muted);
          font-size: 1.02rem;
          line-height: 1.85;
        }

        .highlights-list {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 1rem;
        }

        .highlight-item {
          padding: 1rem 1rem 1.05rem;
          border-radius: 20px;
          border: 1px solid var(--ota-line);
          background: rgba(255, 255, 255, 0.78);
        }

        .highlight-item h3 {
          margin: 0 0 0.45rem;
          font-size: 0.94rem;
          color: var(--ota-ink);
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .highlight-item p {
          margin: 0;
          color: var(--ota-muted);
          line-height: 1.7;
        }

        .footer-note {
          text-align: center;
          color: var(--ota-muted);
          font-size: 0.95rem;
          line-height: 1.7;
          padding: 0.4rem 0 0;
        }

        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: minmax(0, 1.25fr) minmax(280px, 0.75fr);
          }
        }

        @media (max-width: 899px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .about-page {
            padding: 2.5rem 0.85rem 4rem;
          }

          .panel {
            border-radius: 22px;
          }

          .hero-panel,
          .story-panel,
          .highlights-panel {
            padding: 1.2rem;
          }

          .lead,
          .story-copy p,
          .highlight-item p,
          .mini-card p {
            line-height: 1.75;
          }
        }
      `}</style>

      <main className="about-page">
        <div className="about-shell">
          <section className="panel hero-panel">
            <div className="hero-grid">
              <div>
                <p className="eyebrow">About The Archive</p>
                <h1 className="title">A digital attic for gadgets with main-character energy.</h1>
                <p className="lead">
                  Obsolete Tech Archive is a lovingly curated corner of the internet for old gadgets,
                  dead formats, overconfident inventions, and strange little machines that were once
                  absolutely certain they were the future.
                </p>
                <p className="lead">
                  Some of this tech changed everything. Some of it barely survived the decade. All of
                  it has a story, and most of those stories are more fun than a plain spec sheet has
                  any right to be.
                </p>
              </div>

              <aside className="hero-aside">
                <div className="mini-card">
                  <span className="mini-card-label">Archive Policy</span>
                  <p>We respect the icons, roast the flops gently, and save room for the wonderfully unnecessary.</p>
                </div>
                <div className="mini-card">
                  <span className="mini-card-label">Core Belief</span>
                  <p>Even the dustiest disk, loudest printer, or most cursed accessory deserves one more turn in the spotlight.</p>
                </div>
              </aside>
            </div>
          </section>

          <div className="content-grid">
            <section className="panel story-panel">
              <h2 className="section-title">Why This Exists</h2>
              <div className="story-copy">
                <p>
                  Tech history is usually told through the winners. The sleek success stories get the
                  books, the documentaries, and the museum cases. We like those too, but the weird
                  middle children deserve some love.
                </p>
                <p>
                  This archive is for the devices that changed habits, started trends, flopped
                  spectacularly, or simply made daily life feel a little more futuristic for a minute.
                  From chunky media formats to doomed social platforms, every entry is a tiny reminder
                  that progress is rarely tidy.
                </p>
                <p>
                  The goal is not to make old tech feel precious or overly serious. It is to remember
                  how ambitious, awkward, charming, and occasionally ridiculous it all was while still
                  giving each artifact its due.
                </p>
              </div>
            </section>

            <aside className="panel highlights-panel">
              <h2 className="section-title">Quick Bits</h2>
              <div className="highlights-list">
                {aboutHighlights.map((item) => (
                  <div key={item.label} className="highlight-item">
                    <h3>{item.label}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <p className="footer-note">
            Built for nostalgia, curiosity, and anyone who has ever seen a floppy disk icon and felt
            a little too much.
          </p>
        </div>
      </main>
    </>
  );
}
