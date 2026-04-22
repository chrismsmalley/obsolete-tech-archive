'use client';

import styles from '../src/components/secondary/SecondaryPage.module.css';

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
    <main className={styles.page}>
      <div className={styles.shell}>
        <section className={`${styles.panel} ${styles.heroPanel}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Contact</p>
            <h1 className={styles.title}>Get in touch like it is still 1999.</h1>
            <p className={styles.lead}>
              Got a burning question about Betamax? Want to tell us your cousin still uses a Zune?
              Need to nominate a gloriously obsolete gadget for the archive? We would genuinely love
              to hear from you.
            </p>
            <div className={styles.heroRule} />
          </div>
        </section>

        <div className={styles.contentGrid}>
          <section className={`${styles.panel} ${styles.contentPanel}`}>
            <h2 className={styles.sectionTitle}>Send A Note</h2>
            <div className={styles.copyStack}>
              <p>
                For questions, suggestions, nostalgic rants, corrections, or a heartfelt defense of
                some weird gadget history left behind too soon, email us directly.
              </p>
              <p>
                If you are writing in just to say, &quot;My family still has one of those in a drawer,&quot;
                that absolutely counts too.
              </p>
            </div>

            <div className={styles.calloutBox}>
              <span className={styles.label}>Email</span>
              <a className={styles.contactLink} href="mailto:obsoletetecharchive@gmail.com">
                obsoletetecharchive@gmail.com
              </a>
            </div>
          </section>

          <aside className={`${styles.panel} ${styles.sidebarPanel}`}>
            <h2 className={styles.sectionTitle}>Quick Bits</h2>
            <div className={styles.cardList}>
              {contactBits.map((item) => (
                <div key={item.label} className={styles.card}>
                  <span className={styles.label}>{item.label}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <p className={styles.footerNote}>
          We will get back to you faster than a dial-up handshake. Probably.
        </p>
      </div>
    </main>
  );
}
