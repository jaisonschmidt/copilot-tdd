const seededProducts = [
  { id: 1, title: 'Notebook', price: 3999.9 },
  { id: 2, title: 'Mouse', price: 129.9 },
  { id: 3, title: 'Teclado', price: 249.9 }
];

let products = [...seededProducts];

function listProducts() {
  return products;
}

function findProductById(id) {
  return products.find((product) => product.id === id) || null;
}

function createProduct(data) {
  const maxId = products.length > 0
    ? Math.max(...products.map((product) => product.id))
    : 0;

  const newProduct = {
    id: maxId + 1,
    title: data.title,
    price: data.price
  };

  products.push(newProduct);

  return newProduct;
}

function updateProduct(id, data) {
  const index = products.findIndex((product) => product.id === id);

  if (index === -1) {
    return null;
  }

  const updatedProduct = {
    id,
    title: data.title,
    price: data.price
  };

  products[index] = updatedProduct;

  return updatedProduct;
}

function deleteProduct(id) {
  const index = products.findIndex((product) => product.id === id);

  if (index === -1) {
    return false;
  }

  products.splice(index, 1);
  return true;
}

function resetProducts() {
  products = [...seededProducts];
}

module.exports = {
  listProducts,
  findProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  resetProducts
};
