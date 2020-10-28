import React from 'react';
import './Workout.css';

const exercises = [
    {name: "Bench", type: "Chest"},
    {name: "Deadlift", type: "Back"},
    {name: "Squat", type: "Squat"}
]

function Workout(props) {

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
                        {exercises.map((key, index) => {
                            return (
                                <option key={index} data-type={key.type} value={key.name}>{key.name}</option>
                            )
                        })}
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