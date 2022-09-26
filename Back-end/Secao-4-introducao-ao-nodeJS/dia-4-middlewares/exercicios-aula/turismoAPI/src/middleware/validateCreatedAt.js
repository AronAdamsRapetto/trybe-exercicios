const moment = require('moment');

const validateCreatedAt = (req, res, next) => {
  const { description: { createdAt } } = req.body;

  const isValidDate = moment(createdAt, 'DD/MM/YYYY', true).isValid();
  
  if (isValidDate) {
    next();
  } else {
    return res.status(400).json({ message: "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" })
  }
}

module.exports = validateCreatedAt;