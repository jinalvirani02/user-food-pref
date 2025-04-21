import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

export async function openDB() {
  const dbPath = path.join(process.cwd(), 'database.sqlite');
  return open({
    filename: dbPath,
    driver: sqlite3.Database,
  });
}
