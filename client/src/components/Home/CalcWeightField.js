import { toNamespacedPath } from 'path';
import React from 'react';
import './CalcWeightField.css';

function CalcWeightField(props) {

    const [calcWeights, setCalcWeights] = 
    React.useState([
        {name: '45', weight: 0},
        {name: '35', weight: 0},
        {name: '25', weight: 0},
        {name: '10', weight: 0},
        {name: '5', weight: 0},
        {name: '2.5', weight: 0},
        {name: 'Remainder', weight: 0}
    ]);

    const calculateWeights = (value) => {
        let fortyFives = 0;
        let thirtyFives = 0;
        let twentyFives = 0;
        let tens = 0;
        let fives = 0;
        let twoPointFives = 0;
        let remainder = 0;
        // Subtracting barbell weight in lbs
        let weightValue = value - 45;
        // Adds weights as double value for each side of barbell
        while (weightValue >= 90) {
            weightValue = weightValue - 90;
            fortyFives = fortyFives + 1
        }
        while (weightValue >= 70) {
            weightValue = weightValue - 70;
            thirtyFives = thirtyFives + 1
        }
        while (weightValue >= 50) {
            weightValue = weightValue - 50;
            twentyFives = twentyFives + 1
        }
        while (weightValue >= 20) {
            weightValue = weightValue - 20;
            tens = tens + 1
        }
        while (weightValue >= 10) {
            weightValue = weightValue - 10;
            fives = fives + 1
        }
        while (weightValue >= 5) {
            weightValue = weightValue - 5;
            twoPointFives = twoPointFives + 1
        }
        if (weightValue !== 0) {
            let suggestion = 5 - weightValue;
            remainder = "You have a remainder of " + weightValue + " lbs. The above combination puts your total to " + (value - weightValue) + ". Add another 2.5 lb plate for a total of " + (value + suggestion) + " lbs, if you can manage."
        }
        setCalcWeights([
            {name: '45', weight: fortyFives},
            {name: '35', weight: thirtyFives},
            {name: '25', weight: twentyFives},
            {name: '10', weight: tens},
            {name: '5', weight: fives},
            {name: '2.5', weight: twoPointFives},
            {name: 'Remainder', weight: remainder},
        ])
    }

    React.useEffect(() => {
        calculateWeights(props.weight);
    }, [props.weight])


    
    return (
        <div className="row weightCalcContainer">
            {
                props.error ?
                (
                    <div className="row error">
                        "Weight in lbs must be greater than 45. 
                        <br></br>
                        (The barbell is included in total weight)"
                    </div>
                )
                :
                ( 
                    calcWeights.map((key, index) => {
                        return (
                            <div key={index} className="weightSlot">
                                {key.name} = {key.weight}
                            </div>
                        )
                    })
                )
            }
        </div>

    )
}

export default CalcWeightField