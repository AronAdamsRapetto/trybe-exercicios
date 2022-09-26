const { Employee } = require('../models');
const { generateToken } = require('../utils/JWT');

const login = async (email, password) => {
  const employee = await Employee.findOne({
    where: {
      email, password
    }
  });

  if (!employee) throw { statusCode: 401, message: 'Email ou senha incorretos' };

  const token = generateToken(employee);
  return token;
};

module.exports = {
  login,
};