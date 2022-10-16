const accountService = require('../services/accounts.service');

const getAccountById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await accountService.getAccountById(id);
  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};

const lazyGetAccountById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await accountService.lazyGetAccountById(id);

  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};

const getCommentsByAccount = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await accountService.getCommentsByAccount(id);

  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};

const createAccount = async (req, res) => {
  const { body } = req;

  const result = await accountService.createAccount(body);  
  return res.status(200).json(result);
};

const createComment = async (req, res) => {
 const { message } = req.body;
 const { id } = req.params;

 const comment = await accountService.createComment(message, id);
 res.status(200).json({ comment });
};

module.exports = {
  getAccountById,
  lazyGetAccountById,
  getCommentsByAccount,
  createAccount,
  createComment,
};