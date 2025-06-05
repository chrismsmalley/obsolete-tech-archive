'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import techEntries from '@/public/data/techEntries.json';

export default function RandomPage() {
  const router = useRouter();

  useEffect(() => {
    const slugs = techEntries.map(entry => entry.slug);
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    router.replace(`/tech/${randomSlug}`);
  }, [router]);

  return <p>Redirecting to a random entry...</p>;
}