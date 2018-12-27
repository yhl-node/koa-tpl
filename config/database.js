module.exports = {
  development: {
    username: 'root',
    password: 'root',
    database: 'test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'test',
    host: process.env.DB_HOST || 'mysql.db',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'test',
    host: process.env.DB_HOST || 'mysql.db',
    dialect: 'mysql'
  }
}
