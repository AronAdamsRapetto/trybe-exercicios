const validateDescription = (req, res, next) => {
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({ "message": "O campo description é obrigatório" });
  }

  const { createdAt, rating, difficulty } = description;

  if (!createdAt) {
    res.status(400).json({ "message": "O campo createdAt é obrigatório" });  
  } else if (!rating && rating !== 0) {
    res.status(400).json({ "message": "O campo rating é obrigatório" });
  } else if (!difficulty) {
    res.status(400).json({ "message": "O campo difficulty é obrigatório" });
  } else {
    next();
  }  
}

module.exports = validateDescription;