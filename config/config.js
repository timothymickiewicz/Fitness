require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: "password",
    database: "workout",
    host: "localhost",
    port: 3306,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
  },
// Will use when deployed

//   production: {
//     use_env_variable: "JAWSDB_URL",
//     username: process.env.JAWSUSERNAME,
//     password: process.env.JAWSPASSWORD,
//     database: process.env.JAWSDATABASE,
//     host: process.env.JAWSHOST,
//     port: process.env.JAWSPORT,
//     dialect: "mysql",
//   },
};