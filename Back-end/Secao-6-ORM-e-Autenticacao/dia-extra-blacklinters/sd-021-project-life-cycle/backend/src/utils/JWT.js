require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET_KEY;

const generateToken = ({ idEmployee, name, role }) => {
  const config = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const payload = {
    idEmployee,
    name,
    role,
  };

  return jwt.sign(payload, secret, config);
};

const tokenAuthenticate = (token) => {
  try {
    const payload = jwt.verify(token, secret);
    return payload;
  } catch (error) {
    throw { statusCode: 401, message: error.message };
  }
};

module.exports = {
  generateToken,
  tokenAuthenticate,
}