'use client';

import Link from 'next/link';
import { useState } from 'react';

import styles from '../src/components/secondary/SecondaryPage.module.css';

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
    <main className={styles.page}>
      <div className={styles.shell}>
        {submitted ? (
          <section className={`${styles.panel} ${styles.thankYouPanel}`}>
            <div className={styles.thankYouContent}>
              <p className={styles.eyebrow}>Transmission Received</p>
              <h1 className={styles.thankYouTitle}>Thank you for feeding the archive.</h1>
              <p className={styles.thankYouCopy}>
                Your artifact suggestion is in. We will give it a proper look and see whether it
                belongs in our growing pile of glorious, questionable, and deeply lovable obsolete
                tech.
              </p>
              <Link href="/" className={styles.secondaryButton}>
                ← Return to Home
              </Link>
            </div>
          </section>
        ) : (
          <>
            <section className={`${styles.panel} ${styles.heroPanel}`}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>Submit An Artifact</p>
                <h1 className={styles.title}>Got a dusty gadget with a story? Send it in.</h1>
                <p className={styles.lead}>
                  If there is a forgotten device, failed format, or weird piece of tech history you
                  think deserves a spot in the archive, this is the place. Give us the basics and a
                  good description of why it mattered, flopped, or still deserves respect.
                </p>
                <div className={styles.heroRule} />
              </div>
            </section>

            <div className={styles.contentGrid}>
              <section className={`${styles.panel} ${styles.contentPanel}`}>
                <h2 className={styles.sectionTitle}>Nominate Something Delightfully Outdated</h2>
                <p className={styles.formCopy}>
                  Tell us what the artifact is and why it should be remembered. The more specific,
                  weird, or nostalgic the pitch, the better.
                </p>

                <form className={styles.fieldGrid} onSubmit={handleSubmit} encType="multipart/form-data">
                  <input type="text" name="nickname" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

                  <label className={styles.field}>
                    <span className={styles.fieldLabel}>Artifact Name</span>
                    <input
                      className={styles.fieldInput}
                      type="text"
                      name="name"
                      placeholder="Laser keyboard, transparent landline, cursed MP3 player..."
                      required
                    />
                  </label>

                  <label className={styles.field}>
                    <span className={styles.fieldLabel}>Why It Matters</span>
                    <textarea
                      className={styles.fieldTextarea}
                      name="description"
                      placeholder="Tell us what it was, why people used it, why it disappeared, or why you still have feelings about it."
                      required
                    />
                  </label>

                  {error && <p className={styles.error}>{error}</p>}

                  <button className={styles.button} type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Artifact'}
                  </button>
                </form>
              </section>

              <aside className={`${styles.panel} ${styles.sidebarPanel}`}>
                <h2 className={styles.sectionTitle}>Quick Bits</h2>
                <div className={styles.cardList}>
                  {submitBits.map((item) => (
                    <div key={item.label} className={styles.card}>
                      <span className={styles.label}>{item.label}</span>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </>
        )}

        <p className={styles.footerNote}>
          Every great archive starts with somebody saying, &quot;Wait, does anyone else remember this thing?&quot;
        </p>
      </div>
    </main>
  );
}
