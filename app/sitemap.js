import { techEntries } from './src/data/techEntries';
import { SITE_URL } from './src/lib/site';
const STATIC_ROUTES = [
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/submit', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/privacy_policy', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/cookie', changeFrequency: 'monthly', priority: 0.7 },
];

export default function sitemap() {
  const lastModified = new Date();

  const staticRoutes = STATIC_ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const techRoutes = techEntries.map((entry) => ({
    url: `${SITE_URL}/tech/${entry.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...techRoutes];
}
