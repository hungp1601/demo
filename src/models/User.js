const Sequelize = require("sequelize");
const sequelize = require("../database/index");

const User = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },

  hometown: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  number: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  birthday: {
    type: Sequelize.DATE,
    allowNull: true,
  },
});

User.sync();

module.exports = User;
