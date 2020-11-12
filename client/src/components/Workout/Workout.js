import React from 'react';
import './Workout.css';

import $ from 'jquery';

import API from '../../utils/API';

function Workout(props) {
  //   Allows rendering to next page after clicking continue or new workout
  const [workoutUUID, setWorkoutUUID] = React.useState('');
  //   Used to generate sets fields dynamically
  const [sets, setSets] = React.useState(0);
  //   Template literals the sets and their associated weights
  let [setWeights, setSetWeights] = React.useState('');

  React.useEffect(() => {
    setSets(JSON.parse(localStorage.getItem('sets')));
    if (localStorage.getItem('workoutUUID')) {
      setWorkoutUUID(localStorage.getItem('workoutUUID'));
    }
    // Gets localstorage data after returning to tab, sets field values accordingly
    $('#setSets').val(JSON.parse(localStorage.getItem('sets')));
    $('#exercises').val(localStorage.getItem('exercise'));
    $('#breakDuration').val(JSON.parse(localStorage.getItem('duration')));
    for (let i = 1; i <= JSON.parse(localStorage.getItem('sets')); i++) {
      $('#setsFieldReps' + i).val(
        JSON.parse(localStorage.getItem(`setsFieldReps${i}`))
      );
      $('#setsFieldWeight' + i).val(
        JSON.parse(localStorage.getItem(`setsFieldWeight${i}`))
      );
    }
  }, [props.listOfExercises, workoutUUID]);

  const handleGetLastWorkout = () => {
    API.getLastWorkout()
      .then((res) => {
        setWorkoutUUID(res.data.workout_id);
        localStorage.setItem('workoutUUID', res.data.workout_id);
      })
      // replace this with alert
      .catch((err) => $('#continue').text('No Previous Workouts'));
  };

  const handleClear = () => {
    localStorage.clear();
    $(':input').val('');
    setWorkoutUUID('');
  };

  const handleStartNewWorkout = () => {
    API.startWorkout().then((res) => {
      setWorkoutUUID(res.data.workout_id);
      localStorage.setItem('workoutUUID', res.data.workout_id);
    });
  };

  //   Formats set data, creates workoutExercise, clears fields and localstorage
  const handleSubmitWorkout = () => {
    for (let i = 1; i <= sets; i++) {
      setSetWeights(
        (setWeights += `{"reps": ${$(
          '#setsFieldReps' + i
        ).val()}, "weight": ${$('#setsFieldWeight' + i).val()}},`)
      );
    }
    API.createWorkoutExercise({
      exerciseName: localStorage.getItem('exercise'),
      exerciseType: localStorage.getItem('type'),
      numOfSets: JSON.parse(localStorage.getItem('sets')),
      breakDuration: JSON.parse(localStorage.getItem('duration')),
      setWeights: setWeights,
      WorkoutWorkoutId: localStorage.getItem('workoutUUID')
    }).then((res) => {
      handleClear();
    });
  };

  //   Creates the set fields for inputting weight used on each set
  const calcSetFields = () => {
    let setsField = [];
    for (let i = 1; i <= sets; i++) {
      setsField.push(
        <div key={i} className="setsField">
          <div className="subSetsField">
            <span className="subSetsFieldText">Set {i} Weight: </span>
            <input
              id={'setsFieldWeight' + i}
              className="inputBoxSetsField"
              placeholder="Enter as lbs"
              onChange={(e) => {
                if (localStorage.getItem(`setsFieldWeight${i}`)) {
                  localStorage.removeItem(`setsFieldWeight${i}`);
                }
                localStorage.setItem(
                  `setsFieldWeight${i}`,
                  JSON.stringify(e.target.value)
                );
              }}></input>
          </div>
          <div className="subSetsField">
            <span className="subSetsFieldText">Set {i} Reps: </span>
            <input
              id={'setsFieldReps' + i}
              className="inputBoxSetsField"
              onChange={(e) => {
                if (localStorage.getItem(`setsFieldReps${i}`)) {
                  localStorage.removeItem(`setsFieldReps${i}`);
                }
                localStorage.setItem(
                  `setsFieldReps${i}`,
                  JSON.stringify(e.target.value)
                );
              }}></input>
          </div>
        </div>
      );
    }
    return setsField;
  };

  return (
    <div className="row workoutContainer">
      <div className="workoutHeader">Workout</div>
      {workoutUUID === '' ? (
        <div className="row openingContainer">
          <button
            id="continue"
            className="introBtn"
            onClick={() => {
              handleGetLastWorkout();
            }}>
            Continue
          </button>
          <button
            id="new"
            className="introBtn"
            onClick={() => {
              handleStartNewWorkout();
            }}>
            New
          </button>
        </div>
      ) : (
        <div className="row content">
          <button
            className="clearBtn"
            onClick={() => {
              handleClear();
            }}>
            Clear
          </button>
          <div className="row section">
            <div className="col-12 sectionHeader">Exercise:</div>
            <select
              onChange={(e) => {
                if (localStorage.getItem('exercise')) {
                  localStorage.removeItem('exercise');
                }
                localStorage.setItem('exercise', e.target.value);
                if (localStorage.getItem('type')) {
                  localStorage.removeItem('type');
                }
                localStorage.setItem(
                  'type',
                  e.target.options[e.target.selectedIndex].dataset.type
                );
              }}
              name="exercises"
              id="exercises">
              <option
                key={0}
                data-type={'empty'}
                value=""
                defaultValue=""
                disabled
                selected>
                Select an Option
              </option>
              {props.listOfExercises.join() !== '' ? (
                props.listOfExercises.map((key, index) => {
                  return (
                    <option
                      key={index + 1}
                      data-type={key.type}
                      value={key.name}>
                      {key.name}
                    </option>
                  );
                })
              ) : (
                <option
                  id="exercises"
                  key={1000}
                  disabled={true}
                  value="No Workouts Created">
                  No Workouts Created
                </option>
              )}
            </select>
          </div>
          <div className="row section">
            <div className="col-12 sectionHeader">Sets:</div>
            <input
              id="setSets"
              onChange={(e) => {
                if (localStorage.getItem('sets')) {
                  localStorage.removeItem('sets');
                }
                localStorage.setItem('sets', JSON.stringify(e.target.value));
                setSets(e.target.value);
              }}
              className="inputBox"></input>

            {/* Sets field generates here */}
            {sets !== 0 ? (
              <div className="setsFieldContainer">{calcSetFields()}</div>
            ) : null}
          </div>
          <div className="row section">
            <div className="col-12 sectionHeader">Break Duration:</div>
            <input
              id="breakDuration"
              placeholder="seconds"
              onChange={(e) => {
                if (localStorage.getItem('duration')) {
                  localStorage.removeItem('duration');
                }
                localStorage.setItem(
                  'duration',
                  JSON.stringify(e.target.value)
                );
              }}
              className="inputBox"></input>
          </div>
          <button
            className="submitWorkout"
            onClick={() => {
              handleSubmitWorkout();
            }}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default Workout;
