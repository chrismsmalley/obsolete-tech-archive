import { techEntries } from '@/app/src/data/techEntries';
import SlugClientPage from '@/app/src/screens/SlugClientPage';

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
  const url = `https://obsoletetecharchive.com/tech/${tech.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      siteName: 'Obsolete Tech Archive',
      images: [image],
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
