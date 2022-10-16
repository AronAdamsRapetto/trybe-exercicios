const express = require('express');
require('express-async-errors');
require('dotenv').config();

const errorMiddleware = require('./middlewares/error.middleware');
const { routerProject, routerStudent, routerLogin, routerEmployee } = require('./router');
const cors = require('cors')

const app = express();
app.use(cors());

app.use(express.json());

app.use('/login', routerLogin);
app.use('/project', routerProject);
app.use('/student', routerStudent);
app.use('/employee', routerEmployee);

app.use(errorMiddleware); // tem de ser o último
module.exports = app;