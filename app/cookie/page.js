'use client';

import Link from 'next/link';

import styles from '../src/components/secondary/SecondaryPage.module.css';

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
    <main className={styles.page}>
      <div className={styles.shell}>
        <section className={`${styles.panel} ${styles.heroPanel}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Cookie Policy</p>
            <h1 className={styles.title}>
              The digital-cookie version, not the warm tray from the kitchen.
            </h1>
            <p className={styles.lead}>
              This page explains how Obsolete Tech Archive uses cookies and similar technologies,
              why they show up, and what your options are if you would prefer to keep your browser
              a little less crumb-covered.
            </p>
            <div className={styles.heroRule} />
          </div>
        </section>

        <div className={`${styles.contentGrid} ${styles.contentGridWide}`}>
          <section className={`${styles.panel} ${styles.contentPanel}`}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <div className={styles.policyStack}>
              <div className={styles.policyBlock}>
                <h2 className={styles.blockTitle}>What Are Cookies?</h2>
                <p>
                  Cookies are small data files placed on your computer or mobile device when you
                  visit a website. They help sites remember useful bits of information and make the
                  whole experience run more smoothly.
                </p>
              </div>

              <div className={styles.policyBlock}>
                <h2 className={styles.blockTitle}>Why Do We Use Them?</h2>
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

              <div className={styles.policyBlock}>
                <h2 className={styles.blockTitle}>Controlling Cookies</h2>
                <p>
                  You can accept or reject cookies through your browser settings. You may also see a
                  cookie banner on the site that lets you manage consent directly. If you disable
                  some cookies, parts of the experience may behave a little less gracefully.
                </p>
              </div>

              <div className={styles.policyBlock}>
                <h2 className={styles.blockTitle}>Updates To This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time, especially if site features,
                  analytics tools, or ad services change. When that happens, we will update this
                  page so you are not left guessing.
                </p>
              </div>
            </div>
          </section>

          <aside className={`${styles.panel} ${styles.sidebarPanel}`}>
            <h2 className={styles.sectionTitle}>Quick Bits</h2>
            <div className={styles.cardList}>
              {cookieBits.map((item) => (
                <div key={item.label} className={styles.card}>
                  <span className={styles.label}>{item.label}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <p className={styles.footerNote}>
          Questions about cookies, tracking, or anything similarly glamorous? Head over to the{' '}
          <Link href="/contact">Contact Page</Link>.
        </p>
      </div>
    </main>
  );
}
