import React from 'react';
import './Search.css';

function Search(props) {
  React.useEffect(() => {});

  const handleSetQuery = e => {
    props.setInput(e);
  };

  return (
    <div className='row searchContainer'>
      <div className='col-12 chartHeader'>See the Growth</div>
      <select
        onChange={e => {
          handleSetQuery(e.target.value);
        }}
        name='exercises'
        id='exercises'>
        <option key={0} data-type={'empty'} defaultValue='Select an Option'>
          Select an Option
        </option>
        {props.listOfExercises.join() !== '' ? (
          props.listOfExercises.map((key, index) => {
            return (
              <option key={index} data-type={key.type} value={key.name}>
                {key.name}
              </option>
            );
          })
        ) : (
          <option
            id='exercises'
            key={1000}
            disabled={true}
            value='No Workouts Created'>
            No Workouts Created
          </option>
        )}
      </select>
    </div>
  );
}

export default Search;
