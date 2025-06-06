import React from 'react';
import { supabase } from '../../src/lib/supabase';
import Link from 'next/link';
import { techEntries } from '@/app/src/data/techEntries';

import SlugClientPage from '@/app/src/screens/SlugClientPage';

export default function Page() {
  return <SlugClientPage />;
}
export async function generateStaticParams() {
  return techEntries.map((entry) => {
    const slug = (entry.title || "").toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    return { slug };
  });
}