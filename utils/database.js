const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sequelize-boilerplate", "root", "7himkoli", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
