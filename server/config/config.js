require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: 'password',
    database: 'workout',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
  },
  production: {
    use_env_variable: process.env.JAWSDB_URL,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: 'mysql',
  },
};
