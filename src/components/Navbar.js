import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";  
import './Navbar.css';

import Stopwatch from './Timer/Stopwatch';
import CreateExercise from './CreateExercise/CreateExercise';
import Workout from './AddWorkout/Workout';
import Home from './Home';

const tabs = [
    {name: "Stopwatch"},
    {name: "Create"},
    {name: "Workout"}
]

function Navbar(props) {

    return (
        <Router>
            <div className="row">
                <div className="container col-12">
                    <nav>
                        <ul className="navList">
                            <li key={0} id="home" className="navItem">
                                <Link to="/" className="link">Home</Link>
                            </li>
                            {/* Creates li elements for each page */}
                            {
                            tabs.map((key, index) => {
                                return (
                                    <li key={index} id={key.name} className="navItem">
                                        <Link to={"/" + key.name} className="link">    
                                            {key.name}
                                        </Link>
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </nav>
                    <Switch>
                        {/* Creates routes to each page matching the li element that is clicked on */}
                        <Route path={"/Stopwatch"} key="1">
                            <Stopwatch />
                        </Route>
                        <Route path={"/Create"} key="2">
                            <CreateExercise />
                        </Route>
                        <Route path={"/Workout"} key="2">
                            <Workout />
                        </Route>
                        <Route path="/" key="0">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default Navbar