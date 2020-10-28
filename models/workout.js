const Sequelize = require("sequelize");

// Stores individual workouts as unique IDs
module.exports = function (sequelize, DataTypes) {
  var Workout = sequelize.define("Workout", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    workout: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    }
  });
  var WorkoutExercises = sequelize.define("WorkoutExercises", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    exerciseName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    exerciseType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numOfReps: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    breakDuration: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  });
//   Linking exercises to their workout for the day

//  ***getWorkoutExercises/getWorkout and setWorkoutExercises/setWorkout is now a thing ***

  WorkoutExercises.belongsTo(Workout);
  Workout.hasMany(WorkoutExercises, {as: 'Workout', foreignKey: 'id'})
  return [Workout, WorkoutExercises];
};
