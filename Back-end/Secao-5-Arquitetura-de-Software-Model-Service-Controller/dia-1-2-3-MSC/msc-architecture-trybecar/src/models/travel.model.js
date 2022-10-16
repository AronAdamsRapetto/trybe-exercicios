const camelize = require('camelize');
const snakeize = require('snakeize');
const connection = require('./connection');

const insertTravel = async (travel) => {
  const columns = Object.keys(snakeize(travel)).map((key) => `${key}`).join(', ');
  const statements = Object.keys(travel).map((_key) => '?').join(', ');

  const [{ insertId }] = await connection.execute(`
  INSERT INTO travels (${columns}) VALUE (${statements})
  `, [...Object.values(travel)]);

  return insertId;
};

const getTravelById = async (id) => {
  const [[travel]] = await connection.execute(`
  SELECT * FROM travels WHERE id = ?
  `, [id]);

  return camelize(travel);
};

const getTravelByStatus = async (status) => {
  const [travel] = await connection.execute(`
    SELECT * FROM travels WHERE travel_status_id = ?
  `, [status]);

  return camelize(travel);
};

const assignTravel = async (driverId, travelId) => connection.execute(`
  UPDATE travels SET driver_id = ? WHERE id = ?
  `, [driverId, travelId]);

const updateTravelStatus = async (travelStatus, travelId, driverId) => {
  await connection.execute(`
  UPDATE travels SET travel_status_id = ? WHERE id = ? AND driver_id = ?
  `, [travelStatus, travelId, driverId]);
};

module.exports = {
  insertTravel,
  getTravelById,
  getTravelByStatus,
  assignTravel,
  updateTravelStatus,
};