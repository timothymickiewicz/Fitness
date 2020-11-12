const db = require('../models');
const Workout = db.Workout;
const WorkoutExercises = db.WorkoutExercises;
const Exercises = db.Exercises;

// Making relationships
Workout.hasMany(WorkoutExercises, { as: 'WorkoutExercises' });

module.exports = {
  startWorkout: function (req, res) {
    Workout.create()
      .then((newWorkout) => res.status(200).json(newWorkout))
      .catch((err) => res.status(422).json(err));
  },
  getAllWorkouts: function (req, res) {
    console.log(req);
    db.Workout.findAll()
      .then((workouts) => {})
      .catch((err) => res.status(422).json(err));
  },
  findAllWorkoutExercises: function (req, res) {
    console.log(req);
    db.WorkoutExercises.findAll()
      .then((workoutExercises) => res.json(workoutExercises))
      .catch((err) => res.status(422).json(err));
  },
  getAllExercises: function (req, res) {
    Exercises.findAll()
      .then((exercises) => res.json(exercises))
      .catch((err) => res.status(422).json(err));
  },
  findLastExercise: function (req, res) {
    console.log(req);
    db.workoutExercises
      .findAll({
        limit: 1,
        order: [['createdAt', 'DESC']]
      })
      .then((lastEntry) => {
        res.json(lastEntry);
        console.log(lastEntry);
      })
      .catch((err) => {
        res.status(422).json(err);
        console.log(err);
      });
  },
  findLastWorkout: function (req, res) {
    Workout.findOne({
      limit: 1,
      order: [['createdAt', 'DESC']]
    })
      .then((lastEntry) => {
        console.log(lastEntry);
        res.json(lastEntry);
      })
      .catch((err) => {
        res.status(422).json(err);
        console.log(err);
      });
  },
  createWorkoutExercise: function (req, res) {
    console.log(req.body);
    WorkoutExercises.create({
      exerciseName: req.body.exerciseName,
      exerciseType: req.body.exerciseType,
      numOfSets: req.body.numOfSets,
      breakDuration: req.body.breakDuration,
      setWeights: req.body.setWeights,
      WorkoutWorkoutId: req.body.WorkoutWorkoutId
    })
      .then((workoutExercise) => res.status(200).send(workoutExercise))
      .catch((err) => res.status(422).json(err));
  },
  createExercise: function (req, res) {
    console.log(req.body);
    Exercises.create(req.body)
      .then((exercise) => res.status(200).send(exercise))
      .catch((err) => res.status(422).send(err));
  },
  getAllByYear: function (req, res) {
    WorkoutExercises.findAll({
      where: {
        exerciseName: req.body.exerciseName
      },
      order: [['createdAt', 'ASC']]
    })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(422).json(err);
        console.log(err);
      });
  }
};
