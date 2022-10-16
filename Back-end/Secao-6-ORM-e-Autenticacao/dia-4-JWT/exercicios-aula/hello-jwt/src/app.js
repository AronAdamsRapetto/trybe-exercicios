require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { userController, ping } = require('./controllers');
const middlewares = require('./middlewares');

const app = express();
const { PORT } = process.env;

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', ping);
app.post('/login', userController.login);
app.get('/users/me', middlewares.authUser, userController.getUser);
app.get('/top-secret',
middlewares.authUser,
middlewares.authAdmin,
userController.getTopSecret);

app.use(middlewares.error);

module.exports = app;
