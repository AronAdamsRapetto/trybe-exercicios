const express = require('express');
const { passengerController } = require('../controllers');
const validatePassengerFields = require('../middlewares/validatePassengerFields');

const router = express.Router();

router.post('/:passengerId/request/travel',
validatePassengerFields,
passengerController.createTravel);

module.exports = router;