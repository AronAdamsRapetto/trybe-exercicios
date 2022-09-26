const express = require('express');
const patientRouter = require('./routers/patient.router');
const patientController = require('./controllers/patient.controller');

const app = express();

app.use(express.json());
app.use('/patients', patientRouter);

app.get('/surgeries/:name', patientController.getSurgeriesByDoctor);

module.exports = app;