'use client';
import React from 'react';

export default function AboutPage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <main style={{
        maxWidth: '800px',
        margin: '8rem auto 4rem auto',
        padding: '0 1rem',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        flexGrow: 1
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About the Archive</h1>
        <p style={{ fontSize: '1.25rem', lineHeight: '1.8', marginBottom: '1.25rem' }}>
          The Obsolete Tech Archive is a lovingly curated digital museum dedicated to preserving the charm and quirks of yesterday’s technology. Think of us as your virtual attic—full of forgotten gadgets, discarded formats, and strange innovations that once shaped the future.
        </p>
        <p style={{ fontSize: '1.25rem', lineHeight: '1.8', marginBottom: '1.25rem' }}>
          From clicky keyboards to chunky cellphones, each artifact tells a story of invention, ambition, and eventual obsolescence. We believe that even the dustiest disk deserves a spotlight.
        </p>
        <p style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
          Run by a small team of tech romantics and digital historians, the Archive is here to spark nostalgia, inspire curiosity, and celebrate the weird and wonderful side of innovation.
        </p>
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '1rem',
        fontSize: '0.9rem',
        color: '#888'
      }}>
        &copy; {new Date().getFullYear()} Obsolete Tech Archive
      </footer>
    </div>
  );
}