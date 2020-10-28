const router = require("express").Router();
const workoutController = require("../../controllers/workoutController");

router.route("/workoutExercise")
  .get(workoutController.findAllWorkoutExercises)
  .post(workoutController.createWorkoutExercise)
  
module.exports = router;