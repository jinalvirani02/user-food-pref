import { openDB } from '../../../lib/db';

export default async function handler(req, res) {
  const db = await openDB();
  const foods = await db.all('SELECT * FROM foods');
  res.json(foods);
}