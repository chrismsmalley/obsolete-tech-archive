// app/api/tech/route.js
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import db from '../../../lib/db.js';

export async function GET() {
  const rows = db.prepare(`
    SELECT slug, name, category, short_description, long_description, image_url, year_released, year_retired, created_at
    FROM technologies
    ORDER BY datetime(created_at) DESC
  `).all();

  return new Response(JSON.stringify(rows), {
    headers: { 'content-type': 'application/json' },
  });
}