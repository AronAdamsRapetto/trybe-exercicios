const { generateToken } = require('../utils/JWT');

const validateValuesLogin = (username, password) => {
  if (username.length < 5 || typeof username !== 'string') {
    const error = {
      statusCode: 400,
      message: 'Invalid username',
    };
    throw error;
  } 
  if (password.length < 5 || typeof password !== 'string') {
    const error = {
      statusCode: 400,
      message: 'Invalid password',
    };
    throw error;
  }
};

const validateAdmin = (username, password) => username === 'admin' && password === 's3nh4S3gur4???';

const login = ({ username, password }) => {
    if (!username || !password) {
      const error = {
        statusCode: 400,
        message: 'Campos invalidos',
      };
      throw error;
    }
    validateValuesLogin(username, password);
    
    const isAdmin = validateAdmin(username, password); 

    return generateToken(username, isAdmin);    
};

const getUser = ({ username, admin }) => ({ username, admin });

const getTopSecret = () => 'Peter Parker é o Homem-Aranha';

module.exports = {
  login,
  getUser,
  getTopSecret,
};