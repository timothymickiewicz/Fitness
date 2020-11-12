require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: 'password',
    database: 'workout',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
  },
  production: {
    username: 'd67z5x89iadd80kj',
    password: 'u2102wy1yb204cvq',
    database: 't4dqp5qfl1l29bw1',
    host: 'z8dl7f9kwf2g82re.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    dialect: 'mysql'
  }
};
