const { passengerModel, travelModel, waypointsModel } = require('../models');
const { validateRequestTravelSchema } = require('./validations/validationInputValues');

const saveWaypoints = (waypoints, travelId) => {
  if (waypoints && waypoints.length > 0) {
    return waypoints
      .map(async (value) => waypointsModel.insertWayPoints({ ...value, travelId }));
  }
  return [];
};

const verifyPassenger = async (id) => {
  const passenger = await passengerModel.getPassengerById(id);
  if (passenger) return true;
  return false; 
};

const createTravel = async (passengerId, { startingAddress, endingAddress, waypoints }) => {
  const validationResult = validateRequestTravelSchema(
    passengerId,
    startingAddress,
    endingAddress,
    waypoints,
  );

  if (validationResult.type) return validationResult;

  if (verifyPassenger(passengerId)) {
    const travelId = await travelModel.insertTravel({
      passengerId,
      startingAddress,
      endingAddress,
    });
    await Promise.all(saveWaypoints(waypoints, travelId));

    const message = await travelModel.getTravelById(travelId);

    return { type: null, message };
  } 
  return { type: 'PASSENGER_NOT_FOUND', message: 'Passenger doesn\'t exist' };
};

module.exports = {
  createTravel,
  saveWaypoints,
};