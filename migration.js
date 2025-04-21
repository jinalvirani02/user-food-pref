// scripts/seed.ts
import { openDB } from "./lib/db.js";

async function seed() {
  const db = await openDB();

  // Create tables
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS foods (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      tile TEXT,
      description TEXT
    );
  `);

  // Insert sample foods
  await db.run(
    `INSERT INTO foods (name, tile, description) VALUES (?, ?, ?)`,
    "Pizza",
    "pizza-tile.jpg",
    "Delicious cheesy pizza with tomato sauce"
  );
  
  await db.run(
    `INSERT INTO foods (name, tile, description) VALUES (?, ?, ?)`,
    "Burger",
    "burger-tile.jpg",
    "Juicy grilled beef burger with fresh lettuce and tomato"
  );
  
  await db.run(
    `INSERT INTO foods (name, tile, description) VALUES (?, ?, ?)`,
    "Sushi",
    "sushi-tile.jpg",
    "Fresh salmon sushi rolls with wasabi and soy sauce"
  );
  
  await db.run(
    `INSERT INTO foods (name, tile, description) VALUES (?, ?, ?)`,
    "Pasta",
    "pasta-tile.jpg",
    "Creamy Alfredo pasta with parmesan and garlic"
  );
  
  await db.run(
    `INSERT INTO foods (name, tile, description) VALUES (?, ?, ?)`,
    "Tacos",
    "tacos-tile.jpg",
    "Spicy beef tacos with salsa and guacamole"
  );
  
  await db.run(
    `INSERT INTO foods (name, tile, description) VALUES (?, ?, ?)`,
    "Ice Cream",
    "icecream-tile.jpg",
    "Vanilla ice cream with chocolate chips"
  );
  
  await db.run(
    `INSERT INTO foods (name, tile, description) VALUES (?, ?, ?)`,
    "Salad",
    "salad-tile.jpg",
    "Fresh garden salad with vinaigrette"
  );
  
  await db.run(
    `INSERT INTO foods (name, tile, description) VALUES (?, ?, ?)`,
    "Steak",
    "steak-tile.jpg",
    "Grilled sirloin steak with mashed potatoes"
  );
  
  await db.run(
    `INSERT INTO foods (name, tile, description) VALUES (?, ?, ?)`,
    "Pancakes",
    "pancakes-tile.jpg",
    "Fluffy pancakes with maple syrup and butter"
  );
  
  await db.run(
    `INSERT INTO foods (name, tile, description) VALUES (?, ?, ?)`,
    "Ramen",
    "ramen-tile.jpg",
    "Japanese ramen noodles in rich miso broth"
  );
  

  console.log("✅ Seed data inserted");
}

seed().catch((e) => {
  console.error("❌ Error seeding:", e);
});
