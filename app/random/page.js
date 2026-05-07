

'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { techEntries } from '@/app/src/data/techEntries';

export default function RandomEntryPage() {
  const router = useRouter();

  useEffect(() => {
    const slugs = techEntries.map((entry) => entry.slug).filter(Boolean);
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];

    if (randomSlug) {
      router.push(`/tech/${randomSlug}`);
    }
  }, [router]);

  return <p style={{ padding: '2rem' }}>Finding a random artifact...</p>;
}
