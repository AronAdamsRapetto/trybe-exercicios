const bodyParser = require('body-parser');
const express = require('express');
const accountController = require('./controllers/accounts.controller');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/accounts/:id/', accountController.getAccountById);

app.get('/accounts-v2/:id', accountController.lazyGetAccountById);

app.get('/accounts/:id/comments', accountController.getCommentsByAccount);

app.post('/accounts', accountController.createAccount);

app.post('/accounts/:id/comment', accountController.createComment);

module.exports = app;
