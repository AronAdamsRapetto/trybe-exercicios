const express = require('express');
const service = require('../service');
const validateName = require('../middleware/validateName');
const validatePrice = require('../middleware/validatePrice');
const validateDescription = require('../middleware/validateDescription');
const validateCreatedAt = require('../middleware/validateCreatedAt');
const validateRating = require('../middleware/validateRating');
const validateDifficulty = require('../middleware/validateDifficulty');

const activitiesRoutes = express.Router();

activitiesRoutes.post('/',
validateName,
validatePrice,
validateDescription,
validateCreatedAt,
validateRating,
validateDifficulty,
async (req, res) => {
  const { body } = req;
  const message = await service.addActivitie(body);
  
  res.status(201).json(message);
});

module.exports = activitiesRoutes;