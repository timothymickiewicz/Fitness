const Sequelize = require("sequelize");

// Module for DataTypes for Feelings Table
module.exports = function (sequelize, DataTypes) {
  var Exercises = sequelize.define("Exercises", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    exerciseName: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    exerciseType: {
        type: DataTypes.STRING,
        allowNull: false
    }
  });
  return Exercises;
};