import React from 'react';
import './Selection.css';

import $ from 'jquery';

import API from '../../utils/API';

function Selection(props) {
  const [exerciseName, setExerciseName] = React.useState('');

  const handlePostNewExercise = (value) => {
    API.createNewExercise({
      exerciseName: exerciseName,
      exerciseType: props.type
    })
      .then((res) => {
        props.getList();
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleBack = () => {
    props.onClick();
  };

  return props.type ? (
    <div className="row selectionContainer">
      <button className="backBtn" onClick={handleBack}>
        Back
      </button>
      <div className="col-12 selectionHeader">{props.type}</div>
      <div className="row selectionContent">
        <div className="col-12 selectionSectionHeader">Exercise:</div>
        <input
          className="selectionInputBox"
          onChange={(e) => setExerciseName(e.target.value)}></input>
      </div>
      <hr className="break"></hr>
      <button
        className="submitExercise"
        onClick={() => {
          handlePostNewExercise();
          $('.selectionInputBox').val('');
        }}>
        Submit
      </button>
    </div>
  ) : (
    <div></div>
  );
}

export default Selection;
