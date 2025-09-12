// scripts/techEntries-to-seed.mjs
import { writeFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to your techEntries.js
const techEntriesPath = resolve(__dirname, '../app/src/data/techEntries.js');
// Dynamic import (ESM named export)
const { techEntries } = await import(pathToFileURL(techEntriesPath).href);

// Escape single quotes for SQL
const sq = (s) => String(s ?? '').replace(/'/g, "''");

// Normalize image path: keep absolute URLs, otherwise ensure leading slash
const normImg = (s) => {
  if (!s) return '';
  const t = String(s).trim();
  if (/^https?:\/\//i.test(t) || /^data:/i.test(t)) return t; // leave absolute and data URLs as-is
  return t.startsWith('/') ? t : `/${t}`;
};

// Some entries may one day use arrays—join to a string if so
const normCat = (c) => Array.isArray(c) ? c.join(', ') : (c ?? '');

// Ensure unique slugs (append -2, -3, ... on collision)
const usedSlugs = new Set();
const baseSlug = (t) => (t || '').toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
const makeUniqueSlug = (raw) => {
  let base = raw || 'item';
  if (!base) base = 'item';
  let s = base;
  let i = 2;
  while (usedSlugs.has(s)) {
    s = `${base}-${i++}`;
  }
  usedSlugs.add(s);
  return s;
};

const rows = techEntries.map((t) => {
  const rawSlug = t.slug || baseSlug(t.title || '');
  const uniqueSlug = makeUniqueSlug(rawSlug);
  const slug = sq(uniqueSlug);
  const name = sq(t.title || '');
  const category = sq(normCat(t.category));
  const short_description = sq(t.shortDescription || '');
  const long_description = sq(t.longDescription || '');
  const image_url = sq(normImg(t.image || ''));

  // years not present yet → NULL
  const yrRel = 'NULL';
  const yrRet = 'NULL';

  return `INSERT INTO technologies
  (slug, name, category, year_released, year_retired, short_description, long_description, image_url)
  VALUES ('${slug}','${name}','${category}',${yrRel},${yrRet},'${short_description}','${long_description}','${image_url}');`;
});

const sql = `-- db/seed.sql (auto-generated)
-- WARNING: This file will wipe and reseed the 'technologies' table.
PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
DELETE FROM technologies;
${rows.join('\n')}
COMMIT;`;

const outPath = resolve(__dirname, '../db/seed.sql');
writeFileSync(outPath, sql, 'utf8');
console.log('Wrote', outPath);