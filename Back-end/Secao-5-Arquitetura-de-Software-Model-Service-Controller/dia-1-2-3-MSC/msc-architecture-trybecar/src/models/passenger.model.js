const camelize = require('camelize');
const snakeize = require('snakeize');
const connection = require('./connection');

const getPassengerById = async (id) => {
  const [[passenger]] = await connection.execute(`
  SELECT * FROM passengers WHERE id = ?
  `, [id]);

  return camelize(passenger);
};

const insertWayPoints = async (waypoints) => {
  const columns = Object.keys(snakeize(waypoints)).map((key) => `${key}`).join(', ');
  const statements = Object.keys(waypoints).map((_key) => '?').join(', ');

  await connection.execute(`
  INSERT INTO waypoints (${columns}) VALUE (${statements})
  `, [...Object.values(waypoints)]);
};

module.exports = {
  getPassengerById,
  insertWayPoints,
};