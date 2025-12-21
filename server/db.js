import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});

export const initDB = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      price DECIMAL(10, 2),
      model_url VARCHAR(500),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
  
  const { rows } = await pool.query('SELECT COUNT(*) FROM products');
  if (rows[0].count === '0') {
    await pool.query(`
      INSERT INTO products (name, description, price, model_url) 
      VALUES ('Premium Headphones', 'High-quality wireless headphones with noise cancellation', 299.99, '/models/headphones.glb')
    `);
  }
};

export default pool;
