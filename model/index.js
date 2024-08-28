// import { Sequelize, DataTypes } from "sequelize"; //react

// or

const { Sequelize, DataTypes } = require("sequelize");
const databaseConfig = require("../config/dbConfig");
const makeBlogTable = require("./blogModel");
console.log(databaseConfig.username , "hahahahahh");

const sequelize = new Sequelize(
  databaseConfig.db,
  databaseConfig.username,
  databaseConfig.password,
  {
    host: databaseConfig.host,
    port: databaseConfig.port,
    dialect: databaseConfig.dialect,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Correct username and password!");
  })
  .catch((err) => {
    console.log("error asdfas q adsf", err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db = {
//   Sequelize: Sequelize,
// sequelize: sequelize;
// };

db.sequelize.sync({ force: false }).then(() => {
  console.log("Synced done!");
});

db.blogs = makeBlogTable(sequelize, DataTypes);

// export default ghar; //react - type script

// or

module.exports = db; //node
