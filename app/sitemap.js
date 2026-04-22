import { techEntries } from './src/data/techEntries';

const SITE_URL = 'https://obsoletetecharchive.com';

export default function sitemap() {
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/submit',
    '/privacy_policy',
    '/cookie',
  ].map((path, index) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: index === 0 ? 1 : 0.7,
  }));

  const techRoutes = techEntries.map((entry) => ({
    url: `${SITE_URL}/tech/${entry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...techRoutes];
}
