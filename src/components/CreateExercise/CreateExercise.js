import React from 'react';
import './CreateExercise.css';

import Chest from '../../assets/icons/chest.png'
import Back from '../../assets/icons/back.png'
import Arms from '../../assets/icons/arms.png'
import Legs from '../../assets/icons/legs.png'
import Abs from '../../assets/icons/abs.png'
import Cardio from '../../assets/icons/cardio.png'

const icons = [
    Chest,
    Back,
    Arms,
    Legs,
    Abs,
    Cardio
]

function CreateExercise(props) {
    
    return (
        <div className="exerciseContainer row">
            {icons.map((key, index) => {
                console.log(key)
                return (
                    <button className="iconWrap" type="submit">
                        <img className="iconItem" src={key} alt={"type of workout is" + key}></img>
                    </button>
                )
            })}
        </div>
    )
}

export default CreateExercise