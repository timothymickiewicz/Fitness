import React from 'react';
import './Home.css';

import API from '../../utils/API';
import { CalcMax } from '../../utils/Calc';

import Stats from './Stats/Stats';
import Search from './Stats/Search';
import CalcPlates from './CalcPlates';

function Home(props) {
  const [data, setData] = React.useState([]);
  const [chartData, setChartData] = React.useState([]);

  React.useEffect(() => {}, [props.listOfExercises]);

  const setChartDataOnRes = resData => {
    resData.forEach((set, index) => {
      let iterableSets = JSON.parse(`[${set.setWeights.replace(/,\s*$/, '')}]`);
      setChartData(chartData => [
        ...chartData,
        {
          name: set.createdAt,
          uv: CalcMax({ setWeights: iterableSets }).toFixed(0),
        },
      ]);
    });
  };

  const sendDataRequest = val => {
    API.getAllByYear({
      exerciseName: val,
    })
      .then(res => {
        setData(res.data);
        setChartDataOnRes(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className='row homeContainer'>
      <Search
        setChart={sendDataRequest}
        listOfExercises={props.listOfExercises}
      />
      <Stats data={chartData} />
      <CalcPlates />
    </div>
  );
}

export default Home;
