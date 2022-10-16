const validatePrice = (req, res, next) => {
  const { price } = req.body;
  
  if (!price && price !== 0) {
    res.status(400).json({ "message": "O campo price é obrigatório" });
  } else if (price < 0) {
    res.status(400).json({ "message": "O campo price deve ser um número maior ou igual a zero" });
  } else {
    next();
  }
}

module.exports = validatePrice;