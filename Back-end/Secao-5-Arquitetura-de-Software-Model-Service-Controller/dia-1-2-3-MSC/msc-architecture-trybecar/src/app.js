const express = require('express');
const { passengerRouter, travelRouter } = require('./routers');

const app = express();

app.use(express.json());
app.use('/passengers', passengerRouter);
app.use('/drivers', travelRouter);

module.exports = app;
