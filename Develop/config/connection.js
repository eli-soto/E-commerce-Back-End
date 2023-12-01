require('dotenv').config(); // DOTENV is to keep secret 

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL //if statement 
  ? new Sequelize(process.env.JAWSDB_URL) //?then run the code 
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    // : means else
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
// if s


module.exports = sequelize;
