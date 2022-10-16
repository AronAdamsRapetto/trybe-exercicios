const snakeize = require('snakeize');
const connection = require('./connection');

const insertWayPoints = async (waypoints) => {
  const columns = Object.keys(snakeize(waypoints)).map((key) => `${key}`).join(', ');
  const statements = Object.keys(waypoints).map((_key) => '?').join(', ');

  await connection.execute(`
  INSERT INTO waypoints (${columns}) VALUE (${statements})
  `, [...Object.values(waypoints)]);
};

module.exports = {
  insertWayPoints,
};