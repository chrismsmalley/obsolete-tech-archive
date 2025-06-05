

'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RandomEntryPage() {
  const router = useRouter();

  useEffect(() => {
    async function fetchAndRedirect() {
      try {
        const response = await fetch('/data/techEntries.json');
        const data = await response.json();
        const slugs = data.map(entry => entry.slug);
        const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
        router.push(`/tech/${randomSlug}`);
      } catch (error) {
        console.error('Error fetching tech entries:', error);
      }
    }

    fetchAndRedirect();
  }, [router]);

  return <p style={{ padding: '2rem' }}>Finding a random artifact...</p>;
}