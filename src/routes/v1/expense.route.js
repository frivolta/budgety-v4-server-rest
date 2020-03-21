const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const expenseValidation = require('../../validations/expense.validation');
const expenseController = require('../../controllers/expense.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('createExpense'), expenseController.createExpense)
  .get(auth('getExpenses'), expenseController.getExpenses);

router
  .route('/:expenseId')
  .delete(auth('deleteExpense'), validate(expenseValidation.deleteExpense), expenseController.deleteExpense);

module.exports = router;
