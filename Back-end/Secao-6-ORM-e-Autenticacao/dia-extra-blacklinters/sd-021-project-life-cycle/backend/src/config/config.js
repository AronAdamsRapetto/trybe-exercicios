require('dotenv').config();

const config = {
  username: process.env.USER || 'root',
  password: process.env.DATABASE_PASSWORD || "password",
  database: process.env.DATABASE_NAME || 'blacklinters',
  host: process.env.DATABASE_HOST || 'database',
  dialect: process.env.DATABASE_DIALECT || 'mysql'
}

module.exports = {
  development: config,
  test: config,
  production: config,
}
