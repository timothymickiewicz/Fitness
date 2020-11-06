const { v4: uuidv4 } = require('uuid');
const db = require('../models');

module.exports = function (sequelize, DataTypes) {
  // Stores exercises that are attached to a unique workout
  const WorkoutExercises = sequelize.define('WorkoutExercises', {
    exercises_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: function () {
        return uuidv4();
      },
    },
    exerciseName: {
      type: DataTypes.STRING,
      allowNull: false,
      is: ['^[a-z]+$', 'i'], // will only allow letters
    },
    exerciseType: {
      type: DataTypes.STRING,
      allowNull: false,
      is: ['^[a-z]+$', 'i'], // will only allow letters
    },
    numOfSets: {
      type: DataTypes.INTEGER,
      allowNull: false,
      not: ['[a-z]', 'i'], // will not allow letters
    },
    breakDuration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      not: ['[a-z]', 'i'], // will not allow letters
    },
    setWeights: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return WorkoutExercises;
};
