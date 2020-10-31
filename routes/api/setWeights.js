const router = require('express').Router();
const workoutController = require('../../controllers/workoutController');

router.route('/setWeights').post(workoutController.addSetWeights);

module.exports = router;
