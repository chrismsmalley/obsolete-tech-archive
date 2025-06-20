'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaPinterest, FaFlipboard, FaInstagram, FaRss } from 'react-icons/fa';
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
    <div style={{ width: '100%', margin: 0, padding: 0, flexShrink: 0 }}>
      <footer className="footer" style={{ backgroundColor: '#f2f2f2', width: '100vw', margin: 0, padding: 0 }}>
        {/* Top section */}
        <div className="footer-top" style={{ display: 'flex', justifyContent: 'center', padding: '1rem 0', backgroundColor: '#f2f2f2' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            width: '100%'
          }}>
            <p style={{
              margin: 0,
              fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
              textAlign: 'center',
              padding: '0 1rem'
            }}>
              Got a dusty gadget or forgotten flop? Submit it to the archive!
            </p>
            <form
              method="POST"
              style={{
                display: 'flex',
                gap: '0.5rem',
                alignItems: 'center',
                flexWrap: typeof window !== 'undefined' && window.innerWidth < 768 ? 'wrap' : 'nowrap',
                justifyContent: 'center',
                width: '100%'
              }}
              onSubmit={handleSubmit}
            >
              <input
                ref={inputRef}
                type="text"
                name="artifact"
                placeholder="Name your obsolete gem..."
                required
                style={{
                  padding: '0.5rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  width: 'auto',
                  minWidth: '140px',
                  maxWidth: '90vw',
                  flexShrink: 1,
                  flexGrow: 0,
                }}
              />
              <button
                type="submit"
                style={{
                  padding: typeof window !== 'undefined' && window.innerWidth < 768 ? '0.5rem 1rem' : '0.5rem 0.75rem',
                  border: 'none',
                  borderRadius: '4px',
                  backgroundColor: '#333',
                  color: '#fff',
                }}
              >
                Submit
              </button>
              {submitted && (
                <span style={{
                  color: '#000',
                  fontSize: '0.85rem',
                  marginLeft: '0.5rem',
                  alignSelf: 'center',
                  fontWeight: 'bold'
                }}>
               Fax sent... <em>kssshh-grrrr-ding!</em>
                </span>
              )}
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="footer-bottom" style={{ backgroundColor: '#e8e8e8', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center', padding: '1rem 2rem', fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', width: '100%', maxWidth: '1200px', gap: '0.75rem' }}>
              {/* Left: Social Icons */}
              <div className="social-icons" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href="https://www.facebook.com/profile.php?id=61577156755851" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a>
                <a href="https://x.com/ObsoleteTechArc" target="_blank" rel="noopener noreferrer" className="social-icon"><FaXTwitter /></a>
                <a href="https://www.instagram.com/obsoletetecharchive/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
              </div>

              {/* Center: Links */}
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
                <a href="/privacy_policy" className="footer-link">Privacy Policy</a>
                <span>|</span>
                <Link href="/contact" className="footer-link">Contact</Link>
              </div>

              {/* Right: Copyright */}
              <span className="footer-copy" style={{ textAlign: 'center', display: 'block' }}>&copy;{new Date().getFullYear()} Obsolete Tech Archive. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}