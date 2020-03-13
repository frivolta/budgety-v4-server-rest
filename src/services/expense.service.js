const httpStatus = require('http-status');
const AppError = require('../utils/AppError');
const { Expense } = require('../models');

const createExpense = async (expenseBody, expenseUser) => {
  const expenseObject = { ...expenseBody, user: expenseUser };
  const expense = await Expense.create(expenseObject);
  return expense;
};

const getExpenses = async userId => {
  const expenses = await Expense.find({ user: userId });
  if (!expenses) {
    throw new AppError(httpStatus.NOT_FOUND, 'Expense not found');
  }
  return expenses;
};

const getExpenseById = async expenseId => {
  const expense = await Expense.findById(expenseId);
  if (!expense) {
    throw new AppError(httpStatus.NOT_FOUND, 'Expense not found');
  }
  return expense;
};

const deleteExpense = async (expenseId, userId) => {
  const expense = await getExpenseById(expenseId);
  if (expense.user.toString === userId) {
    await expense.remove();
  } else {
    throw new AppError(httpStatus.FORBIDDEN, 'Not authorized');
  }
  return expense;
};

module.exports = {
  createExpense,
  getExpenses,
  deleteExpense,
};
