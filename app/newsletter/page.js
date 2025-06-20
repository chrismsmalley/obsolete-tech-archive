'use client';

import { useState } from 'react';

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const formData = new FormData();
      formData.append('email', email);

      const response = await fetch('https://formspree.io/f/manjnjwb', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      const data = await response.json();

      if (data.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem 1rem', backgroundColor: '#f7f3eb' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Subscribe to Our Newsletter</h1>
        <p style={{ marginBottom: '1.5rem' }}>
          Stay up to date with the latest entries from the Obsolete Tech Archive. Sign up for occasional updates, features, and more.
        </p>
        {submitted ? (
          <p style={{ color: 'green' }}>Thanks! You&apos;ve been subscribed.</p>
        ) : (
          <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: '0.5rem',
                width: '100%',
                maxWidth: '400px',
                marginBottom: '1rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontFamily: 'inherit'
              }}
            />
            <br />
            <button
              type="submit"
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Subscribe
            </button>
          </form>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '1rem',
        fontSize: '0.9rem',
        color: '#888',
        backgroundColor: '#f7f3eb'
      }}>
      </footer>
    </div>
  );
}