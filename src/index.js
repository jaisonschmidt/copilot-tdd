const express = require('express');
const {
  listProducts,
  findProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('./products-store');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API is running successfully' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/products', (req, res) => {
  res.json(listProducts());
});

app.get('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const product = findProductById(id);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  return res.json(product);
});

app.post('/products', (req, res) => {
  const product = createProduct(req.body);
  res.status(201).json(product);
});

app.put('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const updatedProduct = updateProduct(id, req.body);

  if (!updatedProduct) {
    return res.status(404).json({ error: 'Product not found' });
  }

  return res.json(updatedProduct);
});

app.delete('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const removed = deleteProduct(id);

  if (!removed) {
    return res.status(404).json({ error: 'Product not found' });
  }

  return res.status(204).send();
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/health`);
  });
}

module.exports = app;