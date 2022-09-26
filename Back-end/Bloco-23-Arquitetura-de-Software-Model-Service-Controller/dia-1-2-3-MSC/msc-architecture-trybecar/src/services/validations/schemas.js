const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();
const pointSchema = Joi.string().min(3).required();

const waypointSchema = Joi.object({
  address: pointSchema,
  stopOrder: Joi.number().integer().min(1) });

const addRequestTravelSchema = Joi.object({
  passengerId: idSchema,
  startingAddress: pointSchema.label('startingAddress'),
  endingAddress: pointSchema.invalid(Joi.ref('startingAddress')),
  waypoints: Joi.array().items(waypointSchema),
});

const insertCarSchema = Joi.object({
  model: Joi.string().min(3).required(),
  color: Joi.string().min(2).required(),
  licensePlate: Joi.string().length(7),
});

const insertDriverSchema = Joi.object({
  name: Joi.string().min(3).required(),
  carIds: Joi.array().items(idSchema),
});

  module.exports = {
    idSchema,
    addRequestTravelSchema,
    insertCarSchema,
    insertDriverSchema,
  };