const router = require('express').Router();
const workoutRoutes = require('./workout.js');
const workoutExercisesRoutes = require('./workoutExercises.js');
const exercisesRoutes = require('./storedExercises.js');
const lastRoutes = require('./lastWorkout');
// const setWeights = require('./setWeights');
const yearData = require('./yearData');

router.use('/workout', workoutRoutes);
router.use('/workoutExercises', workoutExercisesRoutes);
router.use('/storedExercises', exercisesRoutes);
router.use('/lastWorkout', lastRoutes);
// router.use('/sets', setWeights);
router.use('/data', yearData);

module.exports = router;
