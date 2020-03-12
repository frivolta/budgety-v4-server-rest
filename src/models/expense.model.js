const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      trim: true,
      lowercase: false,
      default: 'No description',
    },
    date: {
      type: String,
      required: true,
      default: Date.now.toString(),
    },
    amount: {
      type: Number,
      default: '0',
      required: true,
    },
  },
  {
    timestamps: true,
    toObject: { getters: true },
    toJSON: { getters: true },
  }
);

expenseSchema.methods.toJSON = function () {
  const expense = this;
  return expense.toObject();
};

expenseSchema.methods.transform = function () {
  const expense = this;
  return expense.toJSON();
};


const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
