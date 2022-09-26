const authAdmin = (req, res, next) => {
  const { locals: { admin } } = req;

  if (admin) {
    next();
  }
  const error = {
    statusCode: 401,
    message: 'Restricted access',
  };

  throw error;
};

module.exports = authAdmin;