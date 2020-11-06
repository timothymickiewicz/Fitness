const router = require('express').Router();
const workoutController = require('../../controllers/workoutController');

router.route('/last').get(workoutController.findLastWorkout);

module.exports = router;
