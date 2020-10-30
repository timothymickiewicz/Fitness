const { v4: uuidv4 } = require('uuid');

module.exports = function (sequelize, DataTypes) {
  // Stores exercises that are attached to a unique workout
  const WorkoutExercises = sequelize.define('WorkoutExercises', {
    exercises_id: {
      type: DataTypes.UUID,
      defaultValue: function () {
        return uuidv4();
      },
    },
    exerciseName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ['^[a-z]+$', 'i'], // will only allow letters
      },
    },
    exerciseType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ['^[a-z]+$', 'i'], // will only allow letters
      },
    },
    numOfSets: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        not: ['[a-z]', 'i'], // will not allow letters
      },
    },
    breakDuration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        not: ['[a-z]', 'i'], // will not allow letters
      },
    },
  });

  return WorkoutExercises;
};
