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
          {/* Grey top border accent to match hero section */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '4px',
            background: '#b0b0b0',
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
            zIndex: 2,
            opacity: 1
          }} />
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
                <a href="/privacy_policy" className="footer-link footer-link-plain">Privacy Policy</a>
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
          border: 1.5px solid #b0b0b0;
          border-radius: 28px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.97), rgba(230,250,255,0.93) 80%, rgba(220,245,255,0.92) 100%);
          box-shadow: 0 0 32px 0 #00eaff22, 0 2px 24px 0 #00334d22;
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
          display: none;
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
          color: #888;
          font-size: clamp(0.95rem, 2vw, 1.05rem);
          line-height: 1.6;
          text-align: center;
          text-shadow: none;
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
          border: 1.5px solid #b0b0b0;
          border-radius: 999px;
          background: rgba(255,255,255,0.92);
          color: #222;
          font-size: 0.95rem;
          box-shadow: 0 0 8px #00eaff11 inset;
        }

        .footer-input:focus {
          outline: 2px solid rgba(47, 93, 98, 0.18);
          outline-offset: 2px;
          border-color: rgba(47, 93, 98, 0.32);
        }

        .footer-button {
          padding: 0.85rem 1.2rem;
          border: 1.5px solid #b0b0b0;
          border-radius: 999px;
          background: #f6fafd;
          color: #222;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease, background 0.2s, color 0.2s;
          box-shadow: none;
          text-shadow: none;
        }

        .footer-button:hover {
          background: #e6e6e6;
          color: #000;
        }

        .footer-status {
          color: #00eaff;
          font-size: 0.9rem;
          font-weight: 700;
          text-align: center;
          text-shadow: 0 0 6px #00eaff88;
        }

        .footer-bottom {
          padding: 1.25rem 1.5rem 1.75rem;
          border-top: 1.5px solid #b0b0b0;
          background: linear-gradient(180deg, rgba(255,255,255,0.85), rgba(230,250,255,0.82));
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
          border: 1.5px solid #b0b0b0;
          background: #f6fafd;
          color: #888;
          box-shadow: none;
          transition: transform 0.2s, border-color 0.2s, background-color 0.2s, color 0.2s;
        }

        .social-icon:hover {
          transform: translateY(-1px) scale(1.08);
          border-color: #888;
          background: #e6e6e6;
          color: #222;
        }

        .footer-link,
        .footer-copy,
        .footer-separator {
          color: #222;
          font-size: 0.9rem;
          text-shadow: none;
        }

        .footer-link {
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .footer-link-plain {
          font-weight: 400;
        }

        .footer-link:hover {
          color: #00eaff;
          text-shadow: 0 0 8px #00eaff;
        }

        .footer-copy {
          text-align: center;
          font-family: inherit;
          font-weight: 400;
          font-size: 0.9rem;
          letter-spacing: 0;
          color: #888;
          text-shadow: none;
          margin-top: 1.5rem;
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
