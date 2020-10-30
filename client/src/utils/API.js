import axios from 'axios';

const API = {
  startWorkout: function () {
    return axios.post('/api/workout/workouts');
  },
  createWorkoutExercise: function () {
    return axios.post('/api/workoutExercises/uniqueWorkoutExercise');
  },
  createNewExercise: function (newExercise) {
    return axios
      .post('/api/storedExercises/exercises', newExercise)
      .then(() => console.log(newExercise));
  },
  getLastExercise: function () {
    return axios.get('/api/workoutExercises/uniqueWorkoutExercise');
  },
  getLastWorkout: function () {
    return axios.get('/api/workout/uniqueWorkout');
  },
  getListOfExercises: function () {
    return axios.get('/api/storedExercises/exercises');
  },
};

export default API;
