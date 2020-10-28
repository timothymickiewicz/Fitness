import React from 'react';
import './Selection.css';

const exercises = [
    {name: "Bench"},
    {name: "Deadlift"},
    {name: "Squat"}
]

function Selection(props) {

    function handleBack(event) {
        props.onClick();
    }
    
    return (
        props.selection ?
        <div className="row selectionContainer">
            <button className="backBtn" onClick={handleBack}>
                Back
            </button>
            <div className="col-12 selectionHeader">
                {props.selection}
            </div>
            <div className="row selectionContent">
                <div className="col-12 sectionHeader">
                    Exercise:
                </div>
                <input className="inputBox">

                </input>
            </div>
            <hr className="break"></hr>
            <button className="submitExercise">Submit</button>
        </div>
        :
        <div></div>
    )
}

export default Selection