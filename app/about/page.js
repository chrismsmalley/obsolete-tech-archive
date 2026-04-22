'use client';

import styles from '../src/components/secondary/SecondaryPage.module.css';

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
    <main className={styles.page}>
      <div className={styles.shell}>
        <section className={`${styles.panel} ${styles.heroPanel}`}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>About The Archive</p>
              <h1 className={styles.title}>A digital attic for gadgets with main-character energy.</h1>
              <p className={styles.lead}>
                Obsolete Tech Archive is a lovingly curated corner of the internet for old gadgets,
                dead formats, overconfident inventions, and strange little machines that were once
                absolutely certain they were the future.
              </p>
              <p className={styles.lead}>
                Some of this tech changed everything. Some of it barely survived the decade. All of
                it has a story, and most of those stories are more fun than a plain spec sheet has
                any right to be.
              </p>
              <div className={styles.heroRule} />
            </div>

            <aside className={styles.heroAside}>
              <div className={styles.miniCard}>
                <span className={styles.label}>Archive Policy</span>
                <p>
                  We respect the icons, roast the flops gently, and save room for the wonderfully
                  unnecessary.
                </p>
              </div>
              <div className={styles.miniCard}>
                <span className={styles.label}>Core Belief</span>
                <p>
                  Even the dustiest disk, loudest printer, or most cursed accessory deserves one
                  more turn in the spotlight.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <div className={styles.contentGrid}>
          <section className={`${styles.panel} ${styles.contentPanel}`}>
            <h2 className={styles.sectionTitle}>Why This Exists</h2>
            <div className={styles.copyStack}>
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

          <aside className={`${styles.panel} ${styles.sidebarPanel}`}>
            <h2 className={styles.sectionTitle}>Quick Bits</h2>
            <div className={styles.cardList}>
              {aboutHighlights.map((item) => (
                <div key={item.label} className={styles.card}>
                  <span className={styles.label}>{item.label}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <p className={styles.footerNote}>
          Built for nostalgia, curiosity, and anyone who has ever seen a floppy disk icon and felt
          a little too much.
        </p>
      </div>
    </main>
  );
}
