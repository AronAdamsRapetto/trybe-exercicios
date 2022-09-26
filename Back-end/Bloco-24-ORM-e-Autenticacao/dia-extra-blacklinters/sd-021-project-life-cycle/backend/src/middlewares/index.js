const authRole = require('./authRole.middleware');
const error = require('./error.middleware');
const tokenValidation = require('./tokenValidation.middleware');

module.exports = {
  authRole,
  error,
  tokenValidation,
}