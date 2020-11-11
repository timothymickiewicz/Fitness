const db = require('../server/models');
const Workout = db.Workout;
const WorkoutExercises = db.WorkoutExercises;
const Exercises = db.Exercises;
Workout.hasMany(WorkoutExercises, { as: 'WorkoutExercises' });

let testChart = () => {
  Exercises.create({ exerciseName: 'Barbell Bench', exerciseType: 'Chest' });
  for (let i = 0; i < 30; i++) {
    let setWeights = '';
    for (let j = 0; j < 4; j++) {
      let reps =
      Math.floor(Math.random() * (Math.ceil(12) - Math.ceil(8) + 1)) + 8;
      let weight =
      Math.floor(
        Math.random() * (Math.ceil(225 + i / 2) - Math.ceil(200 + i / 2) + 1)
      ) + (200 + (i + 2));
        (setWeights += `{"reps": ${reps}, "weight": ${weight}},`)
    }
    let seedDate = new Date();
    seedDate.setTime(seedDate.getTime() - 24 * 60 * 60 * 1000 * (30 - i));
    Workout.create().then(newWorkout => {
      let workoutId = '';
      workoutId = newWorkout.workout_id
      console.log(workoutId)
      WorkoutExercises.create({
        exerciseName: 'Barbell Bench',
        exerciseType: 'Chest',
        numOfSets: 4,
        breakDuration: 90,
        setWeights: setWeights,
        WorkoutWorkoutId: workoutId,
        createdAt: seedDate,
      });
    });
  }
};

testChart();
