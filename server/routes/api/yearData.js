const router = require('express').Router();
const workoutController = require('../../controllers/workoutController');

router.route('/year').post(workoutController.getAllByYear);

module.exports = router;
