import { openDB } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const db = await openDB();
    const { firstName, lastName, email, password } = req.body;

    try {
      await db.run(
        'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
        [firstName, lastName, email, password]
      );
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Registration failed: ' + error.message });
    }
  } else {
    res.status(405).end();
  }
}