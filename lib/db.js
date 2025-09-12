

// lib/db.js
// SQLite helper using better-sqlite3 with a default export
import Database from 'better-sqlite3';

// Use env var in production if you want to point elsewhere
const dbPath = process.env.SQLITE_PATH || 'db/obsolete_tech.db';

// fileMustExist ensures we fail loudly if the DB isn’t built yet
const db = new Database(dbPath, { fileMustExist: true });

export default db;     // default export for `import db from '.../lib/db'`
export { db };         // optional named export if you prefer `import { db }`