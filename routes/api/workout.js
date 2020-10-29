const router = require("express").Router();
const workoutController = require("../../controllers/workoutController");

router.route("/workouts")
  .get(workoutController.getAllWorkouts)
  .post(workoutController.startWorkout)
  
module.exports = router;