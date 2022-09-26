const { travelService } = require('../services');

const getOpenTravels = async (_req, res) => {
  const result = await travelService.getOpenTravels();  
  res.status(200).json(result);
};

const assignTravel = async (req, res) => {
  const { params } = req;

  const travel = await travelService.assignTravel(params); 
  res.status(200).json(travel);
};

const startTravel = async (req, res) => {
  const { params } = req;

  const travel = await travelService.startTravel(params);
  res.status(200).json(travel);
};

const finishTravel = async (req, res) => {
  const { params } = req;

  const travel = await travelService.finishTravel(params);
  res.status(200).json(travel);
};

module.exports = {
  getOpenTravels,
  assignTravel,
  startTravel,
  finishTravel,
};