const router = require("express").Router();
const workoutController = require("../../controllers/workoutController");

router.route("/exercises")
  .get(workoutController.getAllExercises)
  .post(workoutController.createExercise)
  
module.exports = router;