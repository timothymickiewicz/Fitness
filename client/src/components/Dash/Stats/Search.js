import React from 'react';
import './Search.css';

function Search(props) {
  React.useEffect(() => {});

  const handleSetQuery = (val) => {
    props.setChart(val);
  };

  return (
    <div className="row searchContainer">
      <div className="col-12 chartHeader">See the Growth</div>
      <select
        onChange={(e) => {
          handleSetQuery(e.target.value);
        }}
        name="exerciseList"
        id="exerciseList">
        <option
          key={0}
          data-type={'empty'}
          value=""
          defaultValue=""
          selected
          disabled={true}>
          Select an Option
        </option>
        {props.listOfExercises.join() !== '' ? (
          props.listOfExercises.map((key, index) => {
            return (
              <option key={index + 1} data-type={key.type} value={key.name}>
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
  );
}

export default Search;
