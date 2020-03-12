const httpStatus = require('http-status');
const AppError = require('../utils/AppError');
const { Expense } = require('../models');
const { getQueryOptions } = require('../utils/service.util');

const createExpense = async expenseBody => {
  const expense = await Expense.create(expenseBody);
  return expense;
};

const getExpenses = async query => {
  const options = getQueryOptions(query);
  const expenses = await Expense.find(null, null, options);
  return expenses;
};

const getExpenseById = async expenseId => {
  const expense = await Expense.findById(expenseId);
  if (!expense) {
    throw new AppError(httpStatus.NOT_FOUND, 'Expense not found')
  }
  return expense;
}

const deleteExpense = async expenseId => {
  const expense = await getExpenseById(expenseId);
  await expense.remove();
  return expense;
}

module.exports = {
  createExpense,
  getExpenses,
  deleteExpense,
};
