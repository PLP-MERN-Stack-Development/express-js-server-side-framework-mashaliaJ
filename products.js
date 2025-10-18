const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// In-memory "database"
let products = [
  { id: '1', name: 'Laptop', description: 'High-performance laptop', price: 1200, category: 'electronics', inStock: true },
  { id: '2', name: 'Smartphone', description: 'Latest smartphone model', price: 800, category: 'electronics', inStock: true },
  { id: '3', name: 'Coffee Maker', description: 'Programmable coffee maker', price: 50, category: 'kitchen', inStock: false }
];

// GET all products (with filtering + pagination)
router.get('/', (req, res) => {
  let results = [...products];
  const { category, page = 1, limit = 5 } = req.query;

  if (category) {
    results = results.filter(p => p.category === category);
  }

  const start = (page - 1) * limit;
  const end = page * limit;
  res.json(results.slice(start, end));
});

// GET specific product
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

// POST create product
router.post('/', (req, res) => {
  const { name, description, price, category, inStock } = req.body;
  if (!name || !description || !price || !category) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newProduct = { id: uuidv4(), name, description, price, category, inStock: inStock ?? true };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT update product
router.put('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });

  Object.assign(product, req.body);
  res.json(product);
});

// DELETE product
router.delete('/:id', (req, res) => {
  products = products.filter(p => p.id !== req.params.id);
  res.json({ message: 'Product deleted successfully' });
});

module.exports = router;
