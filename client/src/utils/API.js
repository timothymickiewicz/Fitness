import axios from 'axios';

const API = {
  startWorkout: function () {
    return axios.post('/api/workout/workouts');
  },
  createWorkoutExercise: function (newWorkoutExercise) {
    return axios.post(
      '/api/workoutExercises/workoutExercise',
      newWorkoutExercise
    );
  },
  createNewExercise: function (newExercise) {
    return axios.post('/api/storedExercises/exercises', newExercise);
  },
  getLastExercise: function () {
    return axios.get('/api/workoutExercises/workoutExercise');
  },
  getLastWorkout: function () {
    return axios.get('/api/lastWorkout/last');
  },
  getListOfExercises: function () {
    return axios.get('/api/storedExercises/exercises');
  },
};

export default API;
