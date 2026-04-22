'use client';

import Link from 'next/link';

import styles from '../src/components/secondary/SecondaryPage.module.css';

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
    <main className={styles.page}>
      <div className={styles.shell}>
        <section className={`${styles.panel} ${styles.heroPanel}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Privacy Policy</p>
            <h1 className={styles.title}>
              The short version: we are into obsolete tech, not surveillance drama.
            </h1>
            <p className={styles.lead}>
              We respect your privacy almost as much as we respect a well-preserved floppy disk.
              This page explains what information may be collected, how it is used, and what we do
              not do with it.
            </p>
            <div className={styles.heroRule} />
          </div>
        </section>

        <div className={`${styles.contentGrid} ${styles.contentGridWide}`}>
          <section className={`${styles.panel} ${styles.contentPanel}`}>
            <h2 className={styles.sectionTitle}>How We Handle Your Info</h2>
            <div className={styles.policyStack}>
              <div className={styles.policyBlock}>
                <h2 className={styles.blockTitle}>What We Collect</h2>
                <p>
                  Practically nothing glamorous. If anything is collected, it is usually the basic
                  technical stuff that comes with running a website, such as analytics data,
                  browser-level information, or the occasional message you intentionally send us.
                </p>
              </div>

              <div className={styles.policyBlock}>
                <h2 className={styles.blockTitle}>Cookies? Only The Digital Kind</h2>
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

              <div className={styles.policyBlock}>
                <h2 className={styles.blockTitle}>Sharing Your Info</h2>
                <p>
                  Nope. Nada. Zilch. We do not sell, rent, or trade your information. You are not a
                  collectible. You are just someone with excellent taste in outdated tech.
                </p>
              </div>

              <div className={styles.policyBlock}>
                <h2 className={styles.blockTitle}>Data Security</h2>
                <p>
                  We take data security seriously and try to keep things locked down as sensibly as
                  possible. No site is magic, but we are not casually tossing your information into
                  the digital void either.
                </p>
              </div>

              <div className={styles.policyBlock}>
                <h2 className={styles.blockTitle}>Changes To This Policy</h2>
                <p>
                  If this policy changes, we will update this page. We will try our best not to make
                  that update read like a punishment.
                </p>
              </div>
            </div>
          </section>

          <aside className={`${styles.panel} ${styles.sidebarPanel}`}>
            <h2 className={styles.sectionTitle}>Quick Bits</h2>
            <div className={styles.cardList}>
              {privacyBits.map((item) => (
                <div key={item.label} className={styles.card}>
                  <span className={styles.label}>{item.label}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <p className={styles.footerNote}>
          Questions, concerns, or a sudden urge to talk about pagers? Visit the{' '}
          <Link href="/contact">Contact Page</Link>.
        </p>
      </div>
    </main>
  );
}
