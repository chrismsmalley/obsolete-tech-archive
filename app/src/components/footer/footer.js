'use client';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('artifact', inputRef.current.value);

    const res = await fetch('https://formspree.io/f/movwvbdd', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (res.ok) {
      setSubmitted(true);
      inputRef.current.value = '';
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <div className="footer-shell">
      <footer className="footer">
        <div className="footer-panel">
          <div className="footer-top">
            <div className="footer-top-inner">
              <p className="footer-prompt">
                Got a dusty gadget or forgotten flop? Submit it to the archive!
              </p>
              <form method="POST" className="footer-form" onSubmit={handleSubmit}>
                <input
                  ref={inputRef}
                  type="text"
                  name="artifact"
                  placeholder="Have an obsolete gem?"
                  required
                  className="footer-input"
                />
                <button type="submit" className="footer-button">
                  Submit
                </button>
                {submitted && (
                  <span className="footer-status">
                    Fax sent... <em>kssshh-grrrr-ding!</em>
                  </span>
                )}
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-inner">
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=61577156755851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://x.com/ObsoleteTechArc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="X"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://www.instagram.com/obsoletetecharchive/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>

              <div className="footer-links">
                <a href="/privacy_policy" className="footer-link">Privacy Policy</a>
                <span className="footer-separator">|</span>
                <Link href="/contact" className="footer-link">Contact</Link>
              </div>

              <span className="footer-copy">
                &copy;{new Date().getFullYear()} Obsolete Tech Archive. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer-shell {
          width: 100%;
          margin: 0;
          padding: 2rem 1rem 1.5rem;
          flex-shrink: 0;
        }

        .footer {
          width: 100%;
        }

        .footer-panel {
          position: relative;
          width: min(1200px, 100%);
          margin: 0 auto;
          overflow: hidden;
          border: 1px solid var(--ota-line);
          border-radius: 28px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(246, 250, 253, 0.92));
          box-shadow: var(--ota-shadow);
        }

        .footer-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at top right, rgba(47, 93, 98, 0.12), transparent 28%),
            radial-gradient(circle at bottom left, rgba(197, 111, 82, 0.1), transparent 24%);
        }

        .footer-panel::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--ota-accent), rgba(197, 111, 82, 0.85));
        }

        .footer-top,
        .footer-bottom {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
        }

        .footer-top {
          padding: 2rem 1.5rem 1.5rem;
        }

        .footer-top-inner,
        .footer-bottom-inner {
          width: 100%;
          max-width: 1100px;
        }

        .footer-top-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .footer-prompt {
          margin: 0;
          color: var(--ota-ink);
          font-size: clamp(0.95rem, 2vw, 1.05rem);
          line-height: 1.6;
          text-align: center;
        }

        .footer-form {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          width: 100%;
        }

        .footer-input {
          min-width: min(320px, 100%);
          max-width: 100%;
          padding: 0.85rem 1rem;
          border: 1px solid var(--ota-line);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.9);
          color: var(--ota-ink);
          font-size: 0.95rem;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
        }

        .footer-input:focus {
          outline: 2px solid rgba(47, 93, 98, 0.18);
          outline-offset: 2px;
          border-color: rgba(47, 93, 98, 0.32);
        }

        .footer-button {
          padding: 0.85rem 1.2rem;
          border: 1px solid rgba(47, 93, 98, 0.16);
          border-radius: 999px;
          background: linear-gradient(135deg, var(--ota-accent), #3e7b85);
          color: #fff;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
          box-shadow: 0 12px 24px rgba(44, 103, 112, 0.18);
        }

        .footer-button:hover {
          transform: translateY(-1px);
          filter: brightness(1.03);
        }

        .footer-status {
          color: var(--ota-accent);
          font-size: 0.9rem;
          font-weight: 700;
          text-align: center;
        }

        .footer-bottom {
          padding: 1.25rem 1.5rem 1.75rem;
          border-top: 1px solid rgba(70, 76, 67, 0.08);
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.4), rgba(235, 242, 246, 0.6));
        }

        .footer-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .social-icons,
        .footer-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 999px;
          border: 1px solid rgba(47, 93, 98, 0.12);
          background: rgba(255, 255, 255, 0.82);
          color: var(--ota-accent);
          transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
        }

        .social-icon:hover {
          transform: translateY(-1px);
          border-color: rgba(47, 93, 98, 0.24);
          background: var(--ota-accent-soft);
        }

        .footer-link,
        .footer-copy,
        .footer-separator {
          color: var(--ota-muted);
          font-size: 0.9rem;
        }

        .footer-link {
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: var(--ota-accent);
        }

        .footer-copy {
          text-align: center;
        }

        @media (max-width: 767px) {
          .footer-shell {
            padding: 1.5rem 0.85rem 1.25rem;
          }

          .footer-panel {
            border-radius: 22px;
          }

          .footer-top {
            padding: 1.5rem 1rem 1.25rem;
          }

          .footer-bottom {
            padding: 1rem 1rem 1.35rem;
          }

          .footer-bottom-inner {
            flex-direction: column;
          }

          .footer-input {
            min-width: 0;
            width: 100%;
          }

          .footer-button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
