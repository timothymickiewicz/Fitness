import React from 'react';
import './Home.css';

import API from '../../utils/API';
import { CalcMax, CalcRange } from '../../utils/Calc';

import Stats from './Stats/Stats';
import Search from './Stats/Search';
import CalcPlates from './CalcPlates';

function Home(props) {
  const [data, setData] = React.useState([]);
  const [lineChartData, setLineChartData] = React.useState([]);
  const [barChartData, setBarChartData] = React.useState([]);
  const [checkForData, setCheckForData] = React.useState(true);
  const [toggleChart, setToggleChart] = React.useState(false);

  React.useEffect(() => {}, [props.listOfExercises]);

  const setLineChartDataOnRes = resData => {
    let lineReturnArr = [], barReturnArr= [];
    resData.forEach((set, index) => {
      let iterableSets = JSON.parse(`[${set.setWeights.replace(/,\s*$/, '')}]`);
      barReturnArr.push({
        name: set.createdAt,
        uv: CalcRange({ setWeights: iterableSets }),
      })
    })
    setBarChartData(barReturnArr);
    resData.forEach((set, index) => {
      let iterableSets = JSON.parse(`[${set.setWeights.replace(/,\s*$/, '')}]`);
      lineReturnArr.push({
        name: set.createdAt,
        uv: CalcMax({ setWeights: iterableSets }).toFixed(0),
      });
    });
    setLineChartData(lineReturnArr);
  };

  const handleToggleChart = () => {
    toggleChart ? setToggleChart(false) : setToggleChart(true)
  }

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
        setLineChartDataOnRes(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className='row homeContainer'>
      <Search setChart={getChartData} listOfExercises={props.listOfExercises} />
      <Stats handleToggleChart={handleToggleChart} checkData={checkForData} toggleChart={toggleChart} data={(toggleChart ? barChartData : lineChartData)} />
      <CalcPlates />
    </div>
  );
}

export default Home;
