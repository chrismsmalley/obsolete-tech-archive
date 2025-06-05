'use client';
import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <>
      <style>
        {`
          @keyframes flicker {
            0% { opacity: 1; }
            5% { opacity: 0.4; }
            10% { opacity: 0.9; }
            15% { opacity: 0.1; }
            20% { opacity: 1; }
            100% { opacity: 0.95; }
          }

          .flicker {
            animation: flicker 1.5s infinite alternate;
          }
        `}
      </style>
      <div style={{
        textAlign: 'center',
        fontFamily: 'monospace',
        color: '#eee',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#111',
      }}>
        <h1 className="flicker" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>404: Page Not Found</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '500px', margin: '0 auto' }}>
          The page you&apos;re looking for is as lost as a floppy in a USB-C world.
        </p>
        <p style={{ marginTop: '2rem' }}>
          <Link href="/" style={{ color: '#00ffff', textDecoration: 'underline' }}>Go back to safety ➜</Link>
        </p>
      </div>
    </>
  );
}