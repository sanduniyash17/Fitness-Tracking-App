const request = require('supertest');
const app = require('C:\\My Project\\Fitness-Trackin-App\\BACKEND'); // Adjust the path accordingly

describe('Your API Tests', () => {
  // Import your Postman collection JSON here
  const postmanCollection = require('C:\\My Project\\Fitness-Trackin-App\\fitnesss_tracker_app.postman_collection.json'); // Adjust the path accordingly

  postmanCollection.item.forEach((requestItem) => {
    it(`should test ${requestItem.name}`, async () => {
      const method = requestItem.request.method.toLowerCase();
      const url = requestItem.request.url.raw;
      const body = requestItem.request.body;

      const response = await request(app)[method](url).send(body);

      // Add assertions based on your Postman tests
      expect(response.statusCode).toBe(requestItem.response.code);
      // Add more assertions as needed
    });
  });
});
