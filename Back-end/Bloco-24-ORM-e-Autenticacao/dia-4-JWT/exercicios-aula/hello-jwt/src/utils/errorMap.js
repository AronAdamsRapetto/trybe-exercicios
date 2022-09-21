const errors = {
  UNAUTORIZED: 401,
  NOT_FOUND: 404,
  INVALID_FIELD: 400,
  INVALID_VALUE: 400,
};

const mapError = (type) => errors[type];

module.exports = mapError;