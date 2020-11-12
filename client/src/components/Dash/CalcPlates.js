import React from 'react';
import './CalcPlates.css';

import CalcWeightField from './CalcWeightField';

function CalcPlates(props) {
  const [weight, setWeight] = React.useState(0);
  const [entryError, setEntryError] = React.useState(false);
  const [toggleSendData, setHandleSendData] = React.useState(false);

  const handleWeightChange = (value) => {
    setWeight(value);
  };

  const checkWeight = (value) => {
    value <= 45 ? setEntryError(true) : setEntryError(false);
  };

  const handleSendData = () => {
    setHandleSendData(true);
  };

  return (
    <div className="row">
      <div className="calcPlatesHeader col-12">
        Calculate Plates
        <div className="row">
          <div className="subtextPlates col-12">
            (For each side of barbell)
            <br></br>
            <span className="subtextPlatesComment">(Barbell is 45 lbs)</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <input
            className="inputBoxCalc"
            onChange={(e) => {
              handleWeightChange(parseInt(e.target.value));
              setHandleSendData(false);
            }}></input>
          <span className="addonText">lbs</span>
        </div>
        <div className="row">
          <div className="col-12">
            <button
              className="submitWeightCheck"
              onClick={() => {
                checkWeight(weight);
                handleSendData();
              }}>
              Calculate
            </button>
          </div>
        </div>
        {toggleSendData ? (
          <CalcWeightField error={entryError} weight={weight} />
        ) : null}
      </div>
    </div>
  );
}

export default CalcPlates;
