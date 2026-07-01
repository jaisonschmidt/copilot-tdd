const request = require('supertest');
const app = require('../src/index');

describe('API Endpoints', () => {
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
});