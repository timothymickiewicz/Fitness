import React from 'react';
import './Workout.css';

import API from '../../utils/API';

function Workout(props) {

    const [listOfExercises, setListOfExercises] = React.useState([])

    const getList = () => {
        API.getListOfExercises()
        .then((res) => {
            let compactRes = [];
            res.data.map((key, index) => {
               return compactRes.push({name: key.exerciseName, type: key.exerciseType});
            })
            setListOfExercises(compactRes);
        })
        .catch((err) => console.log(err))
    }

    React.useEffect(() => {
        getList()
    }, [])

    return (
        <div className="row workoutContainer">
            <div className="workoutHeader">
                Workout
            </div>
            <div className="row content">
                <div className="row section">
                    <div className="col-12 sectionHeader">
                        Exercise:
                    </div>
                    <select name="exercises" id="exercises">
                        {listOfExercises ? 
                            (
                                listOfExercises.map((key, index) => {
                                    return (
                                        <option key={index} data-type={key.type} value={key.name}>{key.name}</option>
                                    )
                                })
                            )
                        :
                            null
                        }

                    </select>
                </div>
                <div className="row section">
                    <div className="col-12 sectionHeader">
                        Sets:
                    </div>
                    <input className="inputBox">

                    </input>
                </div>
                <div className="row section">
                    <div className="col-12 sectionHeader">
                        Reps:
                    </div>
                    <input className="inputBox">

                    </input>
                </div>
                <div className="row section">
                    <div className="col-12 sectionHeader">
                        Duration:
                    </div>
                    <input className="inputBox">

                    </input>
                </div>
            </div>
            <button className="submitWorkout">Submit</button>
        </div>
    )
}

export default Workout