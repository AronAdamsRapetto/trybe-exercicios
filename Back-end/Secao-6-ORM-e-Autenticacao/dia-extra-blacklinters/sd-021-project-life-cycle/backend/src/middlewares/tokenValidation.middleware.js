const { tokenAuthenticate } = require('../utils/JWT');

const tokenValidation = (req, res, next) => {
    console.log("middleware (tokenValidation) - auth: ", req.headers.authorization);
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const employee = tokenAuthenticate(authorization);
    req.employee = employee;
    next();
}

module.exports = tokenValidation