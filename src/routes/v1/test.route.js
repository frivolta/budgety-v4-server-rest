const express = require('express');
const testController = require('../../controllers/test.controller');

const router = express.Router();
router
  .route('/')
  .post(testController.createTestUser)
  .delete(testController.deleteTestUser);

module.exports = router;
