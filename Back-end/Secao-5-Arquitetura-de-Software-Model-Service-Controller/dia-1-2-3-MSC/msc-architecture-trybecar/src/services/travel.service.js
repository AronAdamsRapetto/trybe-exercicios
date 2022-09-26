const { travelModel } = require('../models');

const WAITING_DRIVER = 1;
const DRIVER_ON_THE_WAY = 2;
const TRAVEL_IN_PROGRESS = 3;
const TRAVEL_FINISHED = 4;

const assignTravel = async ({ travelId, driverId }) => {
  await travelModel.assignTravel(driverId, travelId);
  await travelModel.updateTravelStatus(DRIVER_ON_THE_WAY, travelId, driverId);

  const travel = await travelModel.getTravelById(travelId);

  return travel;
};

const getOpenTravels = async () => travelModel.getTravelByStatus(WAITING_DRIVER);

const startTravel = async ({ travelId, driverId }) => {
  await travelModel.updateTravelStatus(TRAVEL_IN_PROGRESS, travelId, driverId);
  
  const travel = await travelModel.getTravelById(travelId);

  return travel;
};

const finishTravel = async ({ travelId, driverId }) => {
  await travelModel.updateTravelStatus(TRAVEL_FINISHED, travelId, driverId);

  const travel = await travelModel.getTravelById(travelId);

  return travel;
};

module.exports = {
  assignTravel,
  getOpenTravels,
  startTravel,
  finishTravel,
};