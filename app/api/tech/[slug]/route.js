// app/api/tech/[slug]/route.js
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import db from '../../../../lib/db.js';

export async function GET(_req, { params }) {
  const { slug } = params;
  try {
    const row = db.prepare(`
      SELECT slug, name, category, short_description, long_description, image_url, year_released, year_retired, created_at
      FROM technologies
      WHERE slug = ?
    `).get(slug);

    if (!row) {
      return new Response('Not found', { status: 404 });
    }

    return new Response(JSON.stringify(row), {
      headers: { 'content-type': 'application/json' },
    });
  } catch (err) {
    console.error('[API /tech/[slug]] Error:', err);
    return new Response('Internal server error', { status: 500 });
  }
}