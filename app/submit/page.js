'use client';
import React, { useState } from 'react';

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

    // Honeypot check
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
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem 1rem', backgroundColor: '#f7f3eb' }}>
        {submitted ? (
          <div style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            <h1>Thank You!</h1>
            <p>Your artifact has been submitted.</p>
            <button
              onClick={() => window.location.href = '/'}
              style={{
                marginTop: '1.5rem',
                background: 'none',
                border: 'none',
                color: '#333',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              ← Return to Home
            </button>
          </div>
        ) : (
          <div style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            <h1>Submit an Artifact</h1>
            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                maxWidth: '500px',
                width: '100%',
                margin: '0 auto',
                padding: '2rem',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Honeypot */}
              <input type="text" name="nickname" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

              <label>
                Artifact Name
                <div style={{ marginTop: '0.5rem' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Artifact Name"
                    required
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
              </label>
              <label>
                Description
                <div style={{ marginTop: '0.5rem' }}>
                  <textarea
                    name="description"
                    placeholder="Description"
                    required
                    style={{
                      width: '100%',
                      padding: '0.5rem',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
              </label>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <button
                type="submit"
                disabled={loading}
                style={{
                  padding: '0.75rem',
                  backgroundColor: '#333',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#555'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#333'}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        )}
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