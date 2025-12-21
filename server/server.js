import express from 'express';
import cors from 'cors';
import pool, { initDB } from './db.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

await initDB();

app.get('/api/products', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM products');
  res.json(rows);
});

app.get('/api/products/:id', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM products WHERE id = $1', [req.params.id]);
  res.json(rows[0]);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
