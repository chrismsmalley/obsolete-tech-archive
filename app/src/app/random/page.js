'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { techEntries } from '@/app/src/data/techEntries';

export default function RandomPage() {
  const router = useRouter();

  useEffect(() => {
    const slugs = techEntries.map((entry) => entry.slug).filter(Boolean);
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];

    if (randomSlug) {
      router.replace(`/tech/${randomSlug}`);
    }
  }, [router]);

  return <p>Redirecting to a random entry...</p>;
}
