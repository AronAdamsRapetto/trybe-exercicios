const express = require('express');
const { travelController } = require('../controllers');

const router = express.Router();

router.get('/open/travels', travelController.getOpenTravels);

router.put('/:driverId/travels/:travelId/assign', travelController.assignTravel);

router.put('/:driverId/travels/:travelId/start', travelController.startTravel);

router.put('/:driverId/travels/:travelId/end', travelController.finishTravel);

module.exports = router;