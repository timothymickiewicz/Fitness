// Table for adding new exercises into the list of exercises to choose from
module.exports = function (sequelize, DataTypes) {
  const Exercises = sequelize.define('Exercises', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    exerciseName: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    exerciseType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Exercises;
};
