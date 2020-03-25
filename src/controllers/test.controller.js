const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');

const createTestUser = catchAsync(async (_, res) => {
  const user = await userService.createUser({
    email: process.env.TEST_USER_EMAIL,
    password: process.env.TEST_USER_PASSWORD,
  });
  res.status(httpStatus.CREATED).send(user.transform());
});

const deleteTestUser = catchAsync(async (_, res) => {
  const user = await userService.getUserByEmail(process.env.TEST_USER_EMAIL);
  await userService.deleteUser(user.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createTestUser,
  deleteTestUser,
};
