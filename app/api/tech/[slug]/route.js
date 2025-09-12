import React, { useState, useEffect } from 'react';
import { techEntries } from '../data/techEntries';

export default function SlugClientPage({ slug }) {
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        if (!slug) throw new Error('No slug provided');
        const res = await fetch(`/api/tech/${slug}`, { cache: 'no-store' });
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();
        if (cancelled) return;
        const mapped = {
          title: data.name,
          slug: data.slug,
          image: data.image_url,
          shortDescription: data.short_description,
          longDescription: data.long_description,
          category: data.category,
          year_released: data.year_released,
          year_retired: data.year_retired,
          created_at: data.created_at,
        };
        setEntry(mapped);
      } catch (e) {
        // Fallback to local array
        const local = (Array.isArray(techEntries) ? techEntries : []).find((t) => t.slug === slug);
        if (local) {
          setEntry(local);
        } else {
          setError(e?.message || 'Failed to load entry');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, [slug]);

  // ... existing useEffect or other code here ...

  return (
    <main>
      {loading && (
        <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>Loading…</div>
      )}
      {!loading && error && (
        <div style={{ textAlign: 'center', padding: '2rem', color: '#b00020' }}>{String(error)}</div>
      )}
      {!loading && !error && !entry && (
        <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>Not found.</div>
      )}
      {entry && (
        <>
          <h1>{entry?.title}</h1>
          <img src={entry?.image || '/images/placeholder.png'} alt={entry?.title || 'Artifact'} />
          <p>{entry?.longDescription}</p>
          {/* other entry-dependent markup, all using entry?.field */}
        </>
      )}
    </main>
  );
}