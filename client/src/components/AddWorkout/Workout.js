import React from 'react';
import './Workout.css';

import $ from 'jquery';

import API from '../../utils/API';

function Workout(props) {
  //   Pulled from the exercises table
  const [listOfExercises, setListOfExercises] = React.useState([]);
  //   Pulled from the workout table
  const [workoutUUID, setWorkoutUUID] = React.useState('');
  //   Posts to the workoutExercises table, relates to workout entry
  const [sets, setSets] = React.useState(0);
  const [duration, setDuration] = React.useState('');
  const [exerciseName, setExerciseName] = React.useState('');
  const [exerciseType, setExerciseType] = React.useState('');
  //   Posts to the sets table, relates to workoutExercises entry
  let [setWeights, setSetWeights] = React.useState('');

  //   Sets the form data to state
  const handleSetWeights = () => {
    for (let i = 1; i <= sets; i++) {
      setSetWeights(
        (setWeights += `{Set${i}:{Reps: ${$(
          '#setsFieldReps' + i
        ).val()}},{Weight: ${$('#setsFieldWeight' + i).val()}}},`)
      );
    }
  };

  //   Submits the workout, returns UUID of workoutExercise to post the set data
  const handleSubmitWorkout = () => {
    API.createWorkoutExercise({
      exerciseName: exerciseName,
      exerciseType: exerciseType,
      numOfSets: parseInt(sets),
      breakDuration: parseInt(duration),
      WorkoutWorkoutId: workoutUUID,
    }).then(res => {
      API.addSetWeights({
        setWeights: setWeights,
        WorkoutExerciseExercisesId: res.data.exercises_id,
      }).then(res2 => {
        console.log(res2);
      });
    });
  };

  //   Creates the set fields for inputting weight used on each set
  const calcSetFields = () => {
    let setsField = [];
    for (let i = 1; i <= sets; i++) {
      setsField.push(
        <div key={i} className='setsField'>
          <div className='subSetsField'>
            Set {i} Reps:
            <input
              id={'setsFieldReps' + i}
              className='inputBoxSetsField'></input>
          </div>
          <div className='subSetsField'>
            Set {i} Weight:
            <input
              id={'setsFieldWeight' + i}
              className='inputBoxSetsField'
              placeholder='Enter as lbs'></input>
          </div>
        </div>
      );
    }
    return setsField;
  };

  //   Populates the dropdown
  const getList = () => {
    API.getListOfExercises()
      .then(res => {
        let compactRes = [];
        res.data.map((key, index) => {
          return compactRes.push({
            name: key.exerciseName,
            type: key.exerciseType,
          });
        });
        setListOfExercises(compactRes);
      })
      .catch(err => console.log(err));
  };

  React.useEffect(() => {
    getList();
  }, []);

  return (
    <div className='row workoutContainer'>
      <div className='workoutHeader'>Workout</div>
      {/* Buttons to continue workout or start new */}
      <div className='row openingContainer'>
        <button
          id='continue'
          className='introBtn'
          onClick={() => {
            API.getLastWorkout()
              .then(res => {
                console.log('old');
                console.log(res);
                setWorkoutUUID(res.data.workout_id);
                $('.openingContainer').css('display', 'none');
                $('.content').css('display', 'flex');
              })
              // Will create an alert at top level that takes over the center of the viewport to say nothing exists
              .catch(err => alert('no previous workout'));
          }}>
          Continue
        </button>
        <button
          id='new'
          className='introBtn'
          onClick={() => {
            API.startWorkout().then(res => {
              setWorkoutUUID(res.data.workout_id);
              console.log('new');
              console.log(res);
              $('.openingContainer').css('display', 'none');
              $('.content').css('display', 'flex');
            });
          }}>
          New
        </button>
      </div>
      <div className='row content'>
        <div className='row section'>
          <div className='col-12 sectionHeader'>Exercise:</div>
          <select
            onChange={e => {
              setExerciseName(e.target.value);
              setExerciseType(
                e.target.options[e.target.selectedIndex].dataset.type
              );
            }}
            name='exercises'
            id='exercises'>
            <option key={0} data-type={'empty'} defaultValue='Select an Option'>
              Select an Option
            </option>
            {listOfExercises.join() !== '' ? (
              listOfExercises.map((key, index) => {
                return (
                  <option key={index} data-type={key.type} value={key.name}>
                    {key.name}
                  </option>
                );
              })
            ) : (
              <option
                id='exercises'
                key={0}
                disabled={true}
                value='No Workouts Created'>
                No Workouts Created
              </option>
            )}
          </select>
        </div>
        <div className='row section'>
          <div className='col-12 sectionHeader'>Sets:</div>
          <input
            id='setSets'
            onChange={e => setSets(e.target.value)}
            className='inputBox'></input>

          {/* Sets field generates here */}
          {sets !== 0 ? (
            <div className='setsFieldContainer'>{calcSetFields()}</div>
          ) : null}
        </div>
        <div className='row section'>
          <div className='col-12 sectionHeader'>Break Duration:</div>
          <input
            id='breakDuration'
            placeholder='seconds'
            onChange={e => setDuration(e.target.value)}
            className='inputBox'></input>
        </div>
        <button
          className='submitWorkout'
          onClick={() => {
            handleSetWeights();
            handleSubmitWorkout();
          }}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Workout;
