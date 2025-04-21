import { openDB } from '../../../lib/db';

export default async function handler(req, res) {
  const db = await openDB();
  const { id } = req.query;
  const food = await db.get('SELECT * FROM foods WHERE id = ?', id);
  res.json(food);
}