'use client';
import React from 'react';
import { supabase } from '../../src/lib/supabase';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { techEntries } from '../../src/data/techEntries';

export default function TechPage() {
  const { slug } = useParams();

  const entry = techEntries.find(item => item.slug === slug);

  if (!entry) {
    return (
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '4rem auto 0', fontFamily: 'sans-serif' }}>
        <h1>Not Found</h1>
        <p>We couldn’t find that tech relic. Try blowing on it and reinserting.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '4rem auto 0', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>{entry.title}</h1>
      <img
        src={`/${entry.image.replace(/^\/+/, '')}`}
        alt={entry.title}
        style={{ maxWidth: '350px', width: '100%', margin: '1rem 0' }}
      />
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        {entry.longDescription}
      </p>
      {entry.category && (
        <p style={{ display: 'block', marginTop: '1rem', fontSize: '0.9rem', fontWeight: '600', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05rem' }}>
          Category: {entry.category}
        </p>
      )}
      <Link
        href="/"
        style={{
          backgroundColor: "transparent",
          color: "#888",
          border: "none",
          fontSize: "0.9rem",
          fontWeight: "500",
          letterSpacing: "0.05rem",
          textTransform: "uppercase",
          cursor: "pointer",
          marginTop: "2rem"
        }}
      >
        ← Back to Archive
      </Link>
    </div>
  );
}