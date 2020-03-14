const request = require('supertest');
const faker = require('faker');
const httpStatus = require('http-status');
const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');
const { User, Expense } = require('../../src/models');
const { userOne, insertUsers, admin } = require('../fixtures/user.fixture');
const { expenseOne } = require('../fixtures/expense.fixture');
const { userOneAccessToken, adminAccessToken } = require('../fixtures/token.fixture');

setupTestDB();

describe('Expense routes', () => {
  describe('POST /v1/expenses', () => {
    test('should return 201 and successfully register expense if request data is ok', async () => {
      await insertUsers([userOne, admin])
      const res = await request(app)
        .post('/v1/expenses')
        .set('Authorization', `Bearer ${adminAccessToken}`)
        .send(expenseOne)
        .expect(httpStatus.CREATED);
      console.log("Body: ", res.body);

    });
  });
});
