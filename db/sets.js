const db = require('../server/models');
const Workout = db.Workout;
const WorkoutExercises = db.WorkoutExercises;
const Exercises = db.Exercises;

let testChart = () => {
  let workoutId = '';

  Exercises.create({ exerciseName: 'Barbell Bench', exerciseType: 'Chest' });

  Workout.create().then(newWorkout => {
    workoutId = newWorkout.workout_id;
  });

  for (let i = 0; i < 30; i++) {
    let reps =
      Math.floor(Math.random() * (Math.ceil(12) - Math.ceil(8) + 1)) + 8;
    let weight =
      Math.floor(
        Math.random() * (Math.ceil(225 + i / 2) - Math.ceil(200 + i / 2) + 1)
      ) +
      (200 + (i + 2));
    let seedDate = new Date();
    seedDate.setTime(seedDate.getTime() - 24 * 60 * 60 * 1000 * (30 - i));
    WorkoutExercises.create({
      exerciseName: 'Barbell Bench',
      exerciseType: 'Chest',
      numOfSets: 4,
      breakDuration: 90,
      setWeights: `{"reps": ${reps}, "weight": ${weight}},`,
      WorkoutWorkoutId: workoutId,
      createdAt: seedDate,
    });
  }
};

testChart();
