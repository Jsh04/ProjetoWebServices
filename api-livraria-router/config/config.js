
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  "development": {
      "username": "root",
      "password": "1234",
      "database": "projeto_web_services",
      "host": "localhost",
      "dialect": "mysql",
      "port": 3306
  },
  "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
  },
  "production": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "host": process.env.DB_HOST,
      "dialect": "mysql",
      "port": process.env.PROD_DB_PORT
  }
  };