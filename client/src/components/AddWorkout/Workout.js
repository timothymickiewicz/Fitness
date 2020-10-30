import React from 'react';
import './Workout.css';

import $ from 'jquery';

import API from '../../utils/API';

function Workout(props) {
  const [listOfExercises, setListOfExercises] = React.useState([]);
  const [sets, setSets] = React.useState(0);
  const [setWeights, setSetWeights] = React.useState([]);
  const [newWorkoutUUID, setNewWorkoutUUID] = React.useState('');

  const handleSetWeights = () => {
    for (let i = 1; i <= sets; i++) {
      let val = $('#setsField' + i).val();
      setSetWeights(setWeights => [...setWeights, val]);
    }
  };

  const handleSubmitWorkout = () => {
    API.startWorkout().then(res => setNewWorkoutUUID(res.data.workout_id));
  };

  const calcSetFields = () => {
    let setsField = [];
    for (let i = 1; i <= sets; i++) {
      setsField.push(
        <div key={i} className='setsField'>
          Set {i}:
          <input id={'setsField' + i} className='inputBoxSetsField'></input>
        </div>
      );
    }
    return setsField;
  };

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
      <div className='row content'>
        <div className='row section'>
          <div className='col-12 sectionHeader'>Exercise:</div>
          <select name='exercises' id='exercises'>
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
          {sets !== 0 ? calcSetFields() : null}
        </div>
        <div className='row section'>
          <div className='col-12 sectionHeader'>Reps:</div>
          <input className='inputBox'></input>
        </div>
        <div className='row section'>
          <div className='col-12 sectionHeader'>Break Duration:</div>
          <input className='inputBox'></input>
        </div>
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
  );
}

export default Workout;
