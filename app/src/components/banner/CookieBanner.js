'use client';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookieAccepted');
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="cookie-banner"
    >
      <div className="cookie-content">
        <span className="cookie-text">
          We use cookies to improve your experience and help us understand how people still love old tech.{' '}
          <a href="/cookie" className="cookie-link">Learn more</a>.
        </span>
        <button onClick={handleAccept} className="cookie-button">Accept</button>
      </div>

      <style jsx>{`
        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
          background-color: #222;
          color: #fff;
          box-sizing: border-box;
          padding: 0.85rem 1rem calc(0.85rem + env(safe-area-inset-bottom));
          overflow-x: hidden;
        }
        .cookie-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem 1rem;
          flex-wrap: wrap;
        }
        .cookie-text {
          font-size: clamp(0.85rem, 1.9vw, 0.95rem);
          line-height: 1.4;
          overflow-wrap: anywhere;
          word-break: break-word;
          max-width: 100%;
          text-align: center;
        }
        .cookie-link {
          color: #ffc107;
          text-decoration: underline;
        }
        .cookie-button {
          padding: 0.5rem 1rem;
          border: none;
          background-color: #ffc107;
          color: #222;
          font-weight: 700;
          border-radius: 6px;
          cursor: pointer;
          flex: 0 0 auto;
        }
        @media (max-width: 600px) {
          .cookie-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .cookie-text {
            max-width: 100%;
            word-break: break-word;
          }
          .cookie-button {
            width: 100%;
            max-width: 320px;
          }
        }
      `}</style>
    </div>
  );
}