const express = require('express');
const activitiesRoutes = require('./routes/activitiesRoutes');
const usersRoutes = require('./routes/usersRoutes');
const autenticateUser = require('./middleware/autenticateUser');

const app = express();

app.use(express.json());
app.use('/activities', autenticateUser, activitiesRoutes);
app.use('/signup', usersRoutes);

module.exports = app;