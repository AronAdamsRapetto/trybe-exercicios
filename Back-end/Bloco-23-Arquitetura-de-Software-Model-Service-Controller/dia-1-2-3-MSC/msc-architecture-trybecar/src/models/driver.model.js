const camelize = require('camelize');
const snakeize = require('snakeize');
const connection = require('./connection');

const findById = async (driverId) => {
  const [[driver]] = await connection.execute(
    'SELECT * FROM drivers WHERE id = ?',
    [driverId],
  );
  return camelize(driver);
};

const getAllDrivers = async () => {
  const drivers = await connection.execute('SELECT * FROM drivers');

  return camelize(drivers);
};

const insertCar = async (carInfo) => {
  const columns = Object.keys(snakeize(carInfo)).map((key) => `${key}`).join(', ');
  const statments = Object.keys(carInfo).map((_key) => '?').join(', ');

  const [{ insertId }] = await connection.execute(`
    INSERT INTO cars (${columns}) VALUE (${statments})
    `, [...Object.values(carInfo)]);

  return insertId;
};

const getCarById = async (carId) => {
  const [[car]] = await connection.execute(`
    SELECT * FROM cars WHERE id = ?
  `, [carId]);

  return camelize(car);
};

const addDriver = async (driverInfo) => {
  const columns = Object.keys(snakeize(driverInfo)).map((key) => `${key}`).join(', ');
  const statments = Object.keys(driverInfo).map((_key) => '?').join(', ');

  const [{ insertId }] = await connection.execute(`
  INSERT INTO drivers (${columns}) VALUE (${statments})
  `, [...Object.values(driverInfo)]);

  return insertId;
};

const addDriverCar = async (driverCarInfo) => {
  const columns = Object.keys(snakeize(driverCarInfo)).map((key) => `${key}`).join(', ');
  const statments = Object.keys(driverCarInfo).map((_key) => '?').join(', ');

  const [{ insertId }] = await connection.execute(`
  INSERT INTO drivers_cars (${columns}) VALUE (${statments})
  `, [...Object.values(driverCarInfo)]);

  return insertId;
};

module.exports = {
  findById,
  getAllDrivers,
  insertCar,
  getCarById,
  addDriver,
  addDriverCar,
};