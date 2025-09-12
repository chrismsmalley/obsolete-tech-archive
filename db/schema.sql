DROP TABLE IF EXISTS technologies;

CREATE TABLE technologies (
  id               INTEGER PRIMARY KEY,
  slug             TEXT NOT NULL UNIQUE,            -- e.g. "compact-disc"
  name             TEXT NOT NULL,                   -- title
  category         TEXT,                            -- keep as TEXT; you can normalize later
  year_released    INTEGER,                         -- optional for now
  year_retired     INTEGER,                         -- optional for now
  short_description TEXT,                           -- maps to shortDescription
  long_description  TEXT,                           -- maps to longDescription
  image_url        TEXT,                            -- maps to image (path or URL)
  created_at       TEXT DEFAULT CURRENT_TIMESTAMP
);