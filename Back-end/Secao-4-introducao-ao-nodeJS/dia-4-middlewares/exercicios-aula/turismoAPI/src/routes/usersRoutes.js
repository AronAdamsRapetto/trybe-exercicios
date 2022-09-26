const { Router } = require('express');
const service = require('../service');
const validateUser = require('../middleware/validateUser');

const usersRoutes = Router();

usersRoutes.post('/', validateUser, async (req, res) => {
  const { body } = req;

  const userToken = await service.addUser(body);

  res.status(200).json({ token: userToken });
});

module.exports = usersRoutes;