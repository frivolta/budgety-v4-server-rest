const Joi = require('@hapi/joi');
const { objectId } = require('./custom.validation');

const createExpense = {
  body: Joi.object().keys({
    type: Joi.string().required(),
    amount: Joi.number().required(),
    description: Joi.string().required(),
    date: Joi.string().required,
    category: Joi.string().required(),
  }),
}

const deleteExpense = {
  body: Joi.object().keys({
    expenseId: Joi.string().custom(objectId),
  }),
}

module.exports = {
  createExpense,
  deleteExpense,
};
