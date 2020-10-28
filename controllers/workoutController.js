const db = require("../models");
const moment = require("moment");

module.exports = {
  findAllWorkouts: function (req, res) {
    console.log(req);
    db.Workout.findAll()
      .then((workouts) => res.json(workouts))
      .catch((err) => res.status(422).json(err));
  },
  findAllWorkoutExercises: function (req, res) {
    console.log(req);
    db.WorkoutExercises.findAll()
      .then((workoutExercises) => res.json(workoutExercises))
      .catch((err) => res.status(422).json(err));
  },
  findAllExercises: function (req, res) {
    db.Exercises.findAll()
      .then((exercises) => res.json(exercises))
      .catch((err) => res.status(422).json(err));
  },
  findLastExercise: function(req, res) {
    console.log(req);
    db.workoutExercises.findAll({
      limit: 1,
      order: [[ 'createdAt', 'DESC' ]]
    }).then((lastEntry) => {res.json(lastEntry); console.log(lastEntry)})
    .catch((err) => {res.status(422).json(err); console.log(err)})
  },
  findLastWorkout: function(req, res) {
    console.log(req);
    db.workoutExercises.findAll({
      where: {
        WorkoutId: req.body.WorkoutId
      },
      order: [[ 'WorkoutId', 'DESC' ]]
    }).then((lastEntry) => {res.json(lastEntry); console.log(lastEntry)})
    .catch((err) => {res.status(422).json(err); console.log(err)})
  },
  createWorkout: function (req, res) {
    console.log(req, res);
    db.Workout.create(req.body)
      .then((workout) => res.json(workout))
      .catch((err) => res.status(422).json(err));
  },
  createWorkoutExercise: function (req, res) {
    console.log(req);
    db.WorkoutExercises.create(req.body)
      .then((workoutExercise) => res.json(workoutExercise))
      .catch((err) => res.status(422).json(err));
  },
  createExercise: function (req, res) {
    db.Exercises.create(req.body)
      .then((exercise) => res.send(exercise))
      .catch((err) => res.status(422).send(err));
  }
};
