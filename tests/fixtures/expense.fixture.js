const mongoose = require('mongoose');
const faker = require('faker');
const Expense = require('../../src/models/expense.model');

const expenseOne = {
  _id: mongoose.Types.ObjectId(),
  type: 'EXPENSE',
  amount: faker.finance.amount({ max: 100000, dec: 0.01 }),
  description: faker.finance.accountName(),
  date: faker.date.recent(),
  category: 'groceries',
};

const insertExpenses = async expenses => {
  await Expense.insertMany(expenses.map(expense => ({ ...expense })));
};

module.exports = {
  expenseOne,
  insertExpenses,
}
