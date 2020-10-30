const { v4: uuidv4 } = require('uuid');

module.exports = function (sequelize, DataTypes) {
  // Stores individual workouts as unique IDs with date
  const Workout = sequelize.define('Workout', {
    workout_id: {
      type: DataTypes.UUID,
      defaultValue: function () {
        return uuidv4();
      },
    },
    workout: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: function () {
        let date = new Date();
        // Converting to Nashville time
        date.setDate(date.getDate() - 1);
        date.setTime(date.getTime() + 19 * 60 * 60 * 1000);
        return date;
      },
    },
  });

  return Workout;
};
