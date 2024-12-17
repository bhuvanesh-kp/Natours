const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./Router/tourRouter');
const userRouter = require('./Router/userRouter');


const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));



app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/tours/:id',tourRouter);

module.exports = app;