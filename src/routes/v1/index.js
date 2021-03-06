const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const expenseRoute = require('./expense.route');
const testRoute = require('./test.route');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/users', userRoute);
router.use('/expenses', expenseRoute);
router.use('/test', testRoute);

module.exports = router;
