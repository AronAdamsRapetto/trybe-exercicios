const { passengerService } = require('../services');
const errorMap = require('../utils/errorMap');

const createTravel = async (req, res) => {
  const { passengerId } = req.params;  
  const { body } = req;

  const { type, message } = await passengerService.createTravel(passengerId, body);
  
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json(message);
};

module.exports = {
  createTravel,
};