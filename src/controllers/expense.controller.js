const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { expenseService } = require('../services');

const createExpense = catchAsync(async (req, res) => {
  const expense = await expenseService.createExpense(req.body);
  res.status(httpStatus.CREATED).send(expense.transform());
});

const getExpenses = catchAsync(async (req, res) => {
  const expenses = await expenseService.getExpenses(req.query);
  const response = expenses.map(user => user.transform());
  res.send(response);
});

const deleteExpense = catchAsync(async (req, res) => {
  const { expenseId } = req.params;
  await expenseService.deleteExpense(expenseId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createExpense,
  getExpenses,
  deleteExpense,
};
