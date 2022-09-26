const { readDataFile } = require('../service');

const autenticateUser = async (req, res, next) => {
  const token = req.header('token');
  const path = '/data/usersDataFile.json';

  const users = await readDataFile(path);

  const isValidToken = users.some(({ token: userToken }) => userToken === token);

  if (isValidToken && token.length === 16) {
    next();
  } else {
    return res.status(401).json({ message: "Token inválido!" });
  }
}

module.exports = autenticateUser;