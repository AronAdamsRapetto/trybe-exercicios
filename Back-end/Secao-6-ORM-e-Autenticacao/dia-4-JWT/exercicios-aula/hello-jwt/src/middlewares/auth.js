const { decodeToken } = require('../utils/JWT');

const authUser = (req, _res, next) => {
  const { token } = req.headers;

  if (!token) {
    const error = {
      statusCode: 401,
      message: 'Token not found',
    };
    throw error;
  }
  
  const user = decodeToken(token);  
  req.locals = user;  
  next();
};

module.exports = authUser;