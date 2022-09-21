const { userService } = require('../services');

const login = (req, res) => {
  const { body } = req;

  const token = userService.login(body);
  
  return res.status(200).json({ token });
};

const getUser = (req, res) => {
  const { locals } = req;

  const user = userService.getUser(locals);
  res.status(200).json(user);
};

const getTopSecret = (req, res) => {
  const secretInfo = userService.getTopSecret();
  res.status(200).json({ secretInfo });
};

module.exports = {
  login,
  getUser,
  getTopSecret,
};