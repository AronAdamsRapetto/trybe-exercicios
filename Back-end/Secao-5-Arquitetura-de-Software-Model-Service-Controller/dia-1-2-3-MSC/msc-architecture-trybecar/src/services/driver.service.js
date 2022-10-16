const { driverModel } = require('../models');
const {
  validateInsertCarSchema,
  validateInsertDriverSchema,
} = require('./validations/validationInputValues');

const getDrivers = async () => {
  const [drivers] = await driverModel.findById();

  return { type: null, message: drivers };
};

const createCar = async (carInfo) => {
  const validation = validateInsertCarSchema(carInfo);

  if (validation.type) return validation;

  const carId = await driverModel.insertCar(carInfo);
  const insertedCar = await driverModel.getCarById(carId);

  return { type: null, message: insertedCar };
};

const addDriverCar = (carIds, driverId) => carIds
  .map(async (carId) => driverModel.addDriverCar({ carId, driverId }));
  
  const getCars = (carList) => {
    if (carList && carList.length > 0) {
      return carList.map(async (carId) => driverModel.getCarById(carId));
    }
    return [];
  };
  
  const verifyCar = (cars) => {
    const someCarNotExist = cars.some((car) => !car); 
    
    if (someCarNotExist) return { type: 'CAR_NOT_FOUND', message: 'Some car is not found' };
    return { type: null, message: '' };
  };

const createDriver = async (driverInfo) => {
  const validation = validateInsertDriverSchema(driverInfo);
  if (validation.type) return validation;

  const { name, carIds } = driverInfo;
  
  const cars = await Promise.all(getCars(carIds));
  const result = verifyCar(cars);
  if (result.type) return result;  

  const driverId = await driverModel.addDriver({ name });
  await Promise.all(addDriverCar(carIds, driverId));

  const driver = await driverModel.findById(driverId);

  return { type: null, message: { ...driver, cars } };
};

module.exports = {
  getDrivers,
  createCar,
  createDriver,
};