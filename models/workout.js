const { v4: uuidv4 } = require('uuid');

module.exports = function (sequelize, DataTypes) {
  // Stores individual workouts as unique IDs with date
  const Workout = sequelize.define("Workout", {
    workout_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: function() {
        return uuidv4()
      }
    },
    workout: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: function() {
        return new Date()
      },
    }
  });
  // Stores exercises that are attached to a unique workout
  const WorkoutExercises = sequelize.define("WorkoutExercises", {
    exercises_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: function() {
        return uuidv4()
      }
    },
    exerciseName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exerciseType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numOfSets: {
      type: DataTypes.INTEGER,
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
  // Stores sets and their weights into the exercise they are attached to
  const Sets = sequelize.define("Sets", {
    sets_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: function() {
        return uuidv4()
      }
    },
    // Stored as string to be evaluated as JSON when returned
    setValues: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  // Establishing relationships
  Workout.hasMany(WorkoutExercises);
  WorkoutExercises.hasMany(Sets)
  return [Workout, WorkoutExercises, Sets]
};
