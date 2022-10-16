const { addRequestTravelSchema, insertCarSchema, insertDriverSchema } = require('./schemas');

const validateRequestTravelSchema = (passengerId, startingAddress, endingAddress, waypoints) => {
  const { error } = addRequestTravelSchema
    .validate({ passengerId, startingAddress, endingAddress, waypoints });
  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' };
};

const validateInsertCarSchema = (carInfo) => {
  const { error } = insertCarSchema.validate(carInfo);
  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' };
};

const validateInsertDriverSchema = (driverInfo) => {
  const { error } = insertDriverSchema.validate(driverInfo);

  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' };
};

module.exports = {
  validateRequestTravelSchema,
  validateInsertCarSchema,
  validateInsertDriverSchema,
};