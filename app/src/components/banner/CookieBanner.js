

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
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#222',
        color: 'white',
        padding: '1rem',
        fontSize: '0.9rem',
        zIndex: 9999,
        textAlign: 'center',
      }}
    >
      <span>
        We use cookies to improve your experience and help us understand how people still love old tech.{' '}
        <a
          href="/cookie"
          style={{ color: '#ffc107', textDecoration: 'underline' }}
        >
          Learn more
        </a>
        .
      </span>{' '}
      <button
        onClick={handleAccept}
        style={{
          marginLeft: '1rem',
          padding: '0.4rem 1rem',
          border: 'none',
          backgroundColor: '#ffc107',
          color: '#222',
          fontWeight: 'bold',
          cursor: 'pointer',
          borderRadius: '4px',
        }}
      >
        Accept
      </button>
    </div>
  );
}