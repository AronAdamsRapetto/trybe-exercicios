const validateDifficulty = (req, res, next) => {
  const { description: { difficulty } } = req.body;

  const difficultyProperties = ['Fácil', 'Médio', 'Difícil'];

  const isValidDifficulty = difficultyProperties.some((property) => property === difficulty);

  if (isValidDifficulty) {
    next();
  } else {
    return res.status(400).json({ message: "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });
  }
}

module.exports = validateDifficulty;