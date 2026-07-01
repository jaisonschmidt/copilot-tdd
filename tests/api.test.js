const request = require('supertest');
const app = require('../src/index');
const productsStore = require('../src/products-store');

const makeProductPayload = (suffix = '') => ({
  title: `Produto ${suffix || 'Novo'}`,
  price: 19.9
});

describe('API Endpoints', () => {
  beforeEach(() => {
    productsStore.resetProducts();
  });

  describe('GET /', () => {
    test('should return welcome message with endpoints info', async () => {
      const response = await request(app)
        .get('/')
        .expect(200);

      expect(response.body).toEqual({
        message: 'API is running successfully'
      });
    });
  });

  describe('GET /health', () => {
    test('should return API health status', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);

      expect(response.body).toEqual({
        status: 'ok'
      });
    });
  });

  describe('Products API', () => {
    describe('GET /products', () => {
      test('should list all seeded products with expected taxonomy', async () => {
        const response = await request(app)
          .get('/products')
          .expect(200);

        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0]).toEqual({
          id: expect.any(Number),
          title: expect.any(String),
          price: expect.any(Number)
        });
      });
    });

    describe('GET /products/:id', () => {
      test('should return a product by id', async () => {
        const listResponse = await request(app)
          .get('/products')
          .expect(200);

        const productId = listResponse.body[0].id;

        const response = await request(app)
          .get(`/products/${productId}`)
          .expect(200);

        expect(response.body).toEqual({
          id: productId,
          title: expect.any(String),
          price: expect.any(Number)
        });
      });

      test('should return 404 when product does not exist', async () => {
        const response = await request(app)
          .get('/products/99999')
          .expect(404);

        expect(response.body).toEqual({
          error: 'Product not found'
        });
      });
    });

    describe('POST /products', () => {
      test('should create a product with incremental id', async () => {
        const beforeResponse = await request(app)
          .get('/products')
          .expect(200);

        const payload = makeProductPayload('POST');

        const response = await request(app)
          .post('/products')
          .send(payload)
          .expect(201);

        const maxIdBefore = Math.max(...beforeResponse.body.map((product) => product.id));

        expect(response.body).toEqual({
          id: maxIdBefore + 1,
          title: payload.title,
          price: payload.price
        });
      });
    });

    describe('PUT /products/:id', () => {
      test('should update an existing product', async () => {
        const listResponse = await request(app)
          .get('/products')
          .expect(200);

        const productId = listResponse.body[0].id;
        const payload = makeProductPayload('PUT');

        const response = await request(app)
          .put(`/products/${productId}`)
          .send(payload)
          .expect(200);

        expect(response.body).toEqual({
          id: productId,
          title: payload.title,
          price: payload.price
        });
      });

      test('should return 404 when updating unknown product', async () => {
        const response = await request(app)
          .put('/products/99999')
          .send(makeProductPayload('Missing'))
          .expect(404);

        expect(response.body).toEqual({
          error: 'Product not found'
        });
      });
    });

    describe('DELETE /products/:id', () => {
      test('should delete an existing product and return 404 afterwards', async () => {
        const listResponse = await request(app)
          .get('/products')
          .expect(200);

        const productId = listResponse.body[0].id;

        await request(app)
          .delete(`/products/${productId}`)
          .expect(204);

        const notFoundResponse = await request(app)
          .get(`/products/${productId}`)
          .expect(404);

        expect(notFoundResponse.body).toEqual({
          error: 'Product not found'
        });
      });

      test('should return 404 when deleting unknown product', async () => {
        const response = await request(app)
          .delete('/products/99999')
          .expect(404);

        expect(response.body).toEqual({
          error: 'Product not found'
        });
      });
    });
  });
});