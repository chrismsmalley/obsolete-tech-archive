import { techEntries } from '@/app/src/data/techEntries';
import { SITE_URL } from '@/app/src/lib/site';
import SlugClientPage from '@/app/src/screens/SlugClientPage';

export function generateStaticParams() {
  return techEntries.map((entry) => ({ slug: entry.slug }));
}

const EDITORIAL_UPDATED_ISO = '2026-04-22';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tech = techEntries.find((entry) => entry.slug === slug);

  if (!tech) {
    return {
      title: 'Artifact Not Found | Obsolete Tech Archive',
      description: 'The requested artifact page could not be found in the Obsolete Tech Archive.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const description = tech.shortDescription || tech.longDescription || 'Explore a retired piece of tech history.';
  const image = tech.image || '/images/OT image.png';
  const title = `${tech.title} | Obsolete Tech Archive`;
  const url = `${SITE_URL}/tech/${tech.slug}`;

  return {
    title,
    description,
    authors: [{ name: 'Obsolete Tech Archive Editorial Desk' }],
    alternates: {
      canonical: url,
    },
    keywords: [tech.title, tech.category, tech.replacedBy, tech.peakEra].filter(Boolean),
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      siteName: 'Obsolete Tech Archive',
      images: [image],
      authors: ['Obsolete Tech Archive Editorial Desk'],
      modifiedTime: EDITORIAL_UPDATED_ISO,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <SlugClientPage slug={slug} />;
}
