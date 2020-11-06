import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import './Navbar.css';

import API from '../utils/API';

import Stopwatch from './Timer/Stopwatch';
import CreateExercise from './CreateExercise/CreateExercise';
import Workout from './AddWorkout/Workout';
import Home from './Home/Home';

const tabs = [
  { name: 'Stopwatch' },
  { name: 'Create' },
  { name: 'Workout' },
  { name: 'Estimate' },
];

function Navbar(props) {
  const [listOfExercises, setListOfExercises] = React.useState([]);

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
  }, []);

  return (
    <Router>
      <div className='row'>
        <div className='container col-12'>
          <nav>
            <ul className='navList'>
              <li key={0} id='home' className='navItem'>
                <NavLink
                  exact
                  to='/'
                  activeStyle={{
                    fontWeight: 'bold',
                    color: '#3f51b5',
                  }}
                  className='link'>
                  Home
                </NavLink>
              </li>
              {/* Creates li elements for each page */}
              {tabs.map((key, index) => {
                return (
                  <li key={index} id={key.name} className='navItem'>
                    <NavLink
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
              <Stopwatch />
            </Route>
            <Route path={'/Create'} key='2'>
              <CreateExercise getList={getList} />
            </Route>
            <Route path={'/Workout'} key='3'>
              <Workout listOfExercises={listOfExercises} />
            </Route>
            <Route path={'/Estimate'} key='4'>
              <Stopwatch />
            </Route>
            <Route path='/' key='0'>
              <Home listOfExercises={listOfExercises} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Navbar;
