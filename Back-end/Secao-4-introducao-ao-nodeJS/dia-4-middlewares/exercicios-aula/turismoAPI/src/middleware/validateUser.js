const validateUser = (req, res, next) => {
  const { body } = req;
  const properties = ['email', 'password', 'firstName', 'phone'];

  const hasProperties = properties.every((property) => property in body);

  if (hasProperties) {
    next();
  } else {
    return res.status(401).json({ message: "Capos ausentes!" });
  }
}

module.exports = validateUser;