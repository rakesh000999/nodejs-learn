const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("database", "root", "3306", {
  host: "localhost",
  port: 3306,
});
