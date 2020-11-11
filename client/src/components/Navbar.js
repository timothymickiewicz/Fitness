import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import './Navbar.css';

import $ from 'jquery';

import Config from '../config';
import API from '../utils/API';

import Stopwatch from './Timer/Stopwatch';
import CreateExercise from './CreateExercise/CreateExercise';
import Workout from './Workout/Workout';
import Estimate from './Estimate/Estimate';
import Dash from './Dash/Dash';

const tabs = [
  { name: 'Workout' },
  { name: 'Stopwatch' },
  { name: 'Create' },
  { name: 'Estimate' },
];

function Navbar(props) {
  const [listOfExercises, setListOfExercises] = React.useState([]);
  // Stopwatch states to allow timer to keep running between tabs
  const [time, setTimer] = React.useState(0);
  const [isTimerRunning, setIsTimerRunning] = React.useState(false);
  const [lapsList, setLapsList] = React.useState([]);
  const timeRef = React.useRef(null);

  const checkSetScrollArrows = () => {
    let $elem = $('.nav');
    $elem.on('scroll', () => {
      let newScrollLeft = $elem.scrollLeft(),
        width = $elem.outerWidth(),
        scrollWidth = $elem.get(0).scrollWidth;
      if (scrollWidth - newScrollLeft <= width) {
        $('.right').css('display', 'none');
      } else {
        $('.right').css('display', '');
      }
      if (newScrollLeft <= 0) {
        $('.left').css('display', '');
      } else {
        $('.left').css('display', 'block');
      }
    });
  };

  // Clears stopwatch interval
  const clearInterval = () => {
    window.clearInterval(timeRef.current);
  };

  // Adds laps to the Stopwatch laps list
  const handleSetLapsList = lapTime => {
    setLapsList([...lapsList, lapTime]);
  };

  // Toggles timer for Stopwatch
  const handleIsTimerRunning = () => {
    isTimerRunning ? setIsTimerRunning(false) : setIsTimerRunning(true);
  };

  // Resets Stopwatch time to default
  const handleResetTimer = () => {
    setTimer(0);
    setIsTimerRunning(false);
    setLapsList([]);
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
    // Keeps timer running as long as the toggle is true, allows continuous runtime after Stopwatch unmounts
    if (isTimerRunning) {
      timeRef.current = window.setInterval(() => {
        setTimer(time => time + Config.updateInterval);
      }, Config.updateInterval);
    }
    return clearInterval;
  }, [isTimerRunning]);

  return (
    <Router>
      {checkSetScrollArrows()}
      <div className='row'>
        <div className='container col-12'>
          <i className='fa fa-caret-right right'></i>
          <i className='fa fa-caret-left left'></i>
          <nav className='nav'>
            <ul className='navList'>
              <li key={0} id='dash' className='navItem'>
                <NavLink
                  exact
                  to='/'
                  activeStyle={{
                    fontWeight: 'bold',
                    color: '#3f51b5',
                  }}
                  className='link'>
                  Dash
                </NavLink>
              </li>
              {/* Creates li elements for each page */}
              {tabs.map((key, index) => {
                return (
                  <li key={index} id={key.name} className='navItem'>
                    <NavLink
                      exact
                      to={'/' + key.name}
                      activeStyle={{
                        fontWeight: 'bold',
                        color: '#3f51b5',
                      }}
                      className='link'>
                      {key.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Switch>
            {/* Creates routes to each page matching the li element that is clicked on */}
            <Route path={'/Stopwatch'} key='1'>
              <Stopwatch
                isTimerRunning={isTimerRunning}
                currentTime={time}
                handleResetTimer={handleResetTimer}
                handleIsTimerRunning={handleIsTimerRunning}
                lapsList={lapsList}
                handleSetLapsList={handleSetLapsList}
              />
            </Route>
            <Route path={'/Create'} key='2'>
              <CreateExercise getList={getList} />
            </Route>
            <Route path={'/Workout'} key='3'>
              <Workout listOfExercises={listOfExercises} />
            </Route>
            <Route path={'/Estimate'} key='4'>
              <Estimate />
            </Route>
            <Route path='/' key='0'>
              <Dash listOfExercises={listOfExercises} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Navbar;
