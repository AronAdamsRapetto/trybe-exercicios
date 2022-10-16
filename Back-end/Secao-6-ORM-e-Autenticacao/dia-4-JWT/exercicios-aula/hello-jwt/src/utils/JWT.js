require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET_KEY;

const generateToken = (username, isAdmin) => {
  const payload = {
    username,
    admin: isAdmin,
  };

  const config = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };
  return jwt.sign(payload, secret, config);  
};

const decodeToken = (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    
    return decoded;
  } catch (error) {
    const { message } = error;
    const err = {
      statusCode: 401,
      message,
    };  

    throw err;
  }
};

module.exports = {
  generateToken,
  decodeToken,
};