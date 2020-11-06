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
  const [checkForData, setCheckForData] = React.useState(true);

  React.useEffect(() => {}, [props.listOfExercises]);

  const setChartDataOnRes = resData => {
    let returnArr = [];
    resData.forEach((set, index) => {
      let iterableSets = JSON.parse(`[${set.setWeights.replace(/,\s*$/, '')}]`);
      returnArr.push({
        name: set.createdAt,
        uv: CalcMax({ setWeights: iterableSets }).toFixed(0),
      });
    });
    setChartData(returnArr);
  };

  const getChartData = val => {
    API.getAllByYear({
      exerciseName: val,
    })
      .then(res => {
        Object.keys(res.data).length === 0
          ? setCheckForData(false)
          : setCheckForData(true);
        // Can use setData for other things, setChartDataOnRes does not need it and makes a different object
        setData(res.data);
        setChartDataOnRes(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className='row homeContainer'>
      <Search setChart={getChartData} listOfExercises={props.listOfExercises} />
      <Stats checkData={checkForData} data={chartData} />
      <CalcPlates />
    </div>
  );
}

export default Home;
