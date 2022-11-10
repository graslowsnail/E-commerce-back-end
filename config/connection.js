//import the sequelize constructor from the library
const Sequelize = require("sequelize");

require("dotenv").config();

//create connection to our database, pass in your mysql infromation for username and password
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,

  {
    dialectOptions: {
      socketPath: "/tmp/mysql.sock",
    },
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

//const sequelize = process.env.JAWSDB_URL
//? new Sequelize(process.env.JAWSDB_URL)
//  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//    host: 'localhost',
//      dialect: 'mysql',
//      dialectOptions: {
//        decimalNumbers: true,
//      },
//    });

module.exports = sequelize;
