const router = require('express').Router();
const workoutRoutes = require('./workout.js');
const workoutExercisesRoutes = require('./workoutExercises.js');
const exercisesRoutes = require('./storedExercises.js');

router.use('/workout', workoutRoutes);
router.use('/workoutExercises', workoutExercisesRoutes);
router.use('/storedExercises', exercisesRoutes);

module.exports = router;
