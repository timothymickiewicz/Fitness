const db = require('../models');
const Workout = db.undefined[0];
const WorkoutExercises = db.undefined[1];
const Sets = db.undefined[2];
const Exercises = db.Exercises;
// const Workout = sequelize.define("Workout", {
//   workout_id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   workout: {
//     type: DataTypes.DATE,
//     allowNull: false,
//     primaryKey: true
//   }
// });

// const Exercises = sequelize.define("Exercises", {
//   exercises_id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   exerciseName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   exerciseType: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   numOfSets: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
//   numOfReps: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
//   breakDuration: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   }
// });

// const Sets = sequelize.define("Sets", {
//   sets_id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   // Stored as string to be evaluated as JSON when returned
//   setValues: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   }
// });

module.exports = {
  startWorkout: function (req, res) {
    Workout.create()
      .then(newWorkout => res.status(200).json(newWorkout))
      .catch(err => res.status(422).json(err));
  },
  getAllWorkouts: function (req, res) {
    console.log(req);
    db.Workout.findAll()
      .then(workouts => res.status(200).json(workouts))
      .catch(err => res.status(422).json(err));
  },
  findAllWorkoutExercises: function (req, res) {
    console.log(req);
    db.WorkoutExercises.findAll()
      .then(workoutExercises => res.json(workoutExercises))
      .catch(err => res.status(422).json(err));
  },
  getAllExercises: function (req, res) {
    Exercises.findAll()
      .then(exercises => res.json(exercises))
      .catch(err => res.status(422).json(err));
  },
  findLastExercise: function (req, res) {
    console.log(req);
    db.workoutExercises
      .findAll({
        limit: 1,
        order: [['createdAt', 'DESC']],
      })
      .then(lastEntry => {
        res.json(lastEntry);
        console.log(lastEntry);
      })
      .catch(err => {
        res.status(422).json(err);
        console.log(err);
      });
  },
  findLastWorkout: function (req, res) {
    Workout.findOne({
      limit: 1,
      order: [['id', 'DESC']],
    })
      .then(lastEntry => {
        console.log(lastEntry);
        res.json(lastEntry);
      })
      .catch(err => {
        res.status(422).json(err);
        console.log(err);
      });
  },
  createWorkoutExercise: function (req, res) {
    console.log(req.body);
    WorkoutExercises.create(req.body)
      .then(workoutExercise => res.json(workoutExercise))
      .catch(err => res.status(422).json(err));
  },
  createExercise: function (req, res) {
    Exercises.create(req.body)
      .then(exercise => res.status(200).send(exercise))
      .catch(err => res.status(422).send(err));
  },
};
