import React from 'react';
import './Home.css';

import API from '../../utils/API';

import Stats from './Stats/Stats';
import Search from './Stats/Search';
import CalcPlates from './CalcPlates';

function Home(props) {
  const [data, setData] = React.useState([]);
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {}, [props.listOfExercises, query]);

  const sendDataRequest = () => {
    API.getAllByYear({
      exerciseName: query,
    })
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSetQuery = input => {
    setQuery(input);
  };

  return (
    <div className='row homeContainer'>
      <Search
        setInput={handleSetQuery}
        listOfExercises={props.listOfExercises}
      />
      <div className='row'>
        <div className='col-12'>
          <button
            className='submitWeightCheck'
            onClick={() => {
              sendDataRequest();
            }}>
            Calculate
          </button>
        </div>
      </div>
      <Stats data={data} />
      <CalcPlates />
    </div>
  );
}

export default Home;
