const router = require("express").Router();
const workoutController = require("../../controllers/workoutController");

router.route("/workouts")
  .get(workoutController.findAllWorkouts)
  .post(workoutController.createWorkout)
  
module.exports = router;