import React, { Component } from 'react';
import './Stopwatch.css';

import Timer from './Timer';
import Controls from './Controls';
import LapTimeList from './LapTimeList';

class Stopwatch extends Component {
  start() {
    this.props.handleIsTimerRunning();
  }

  stop() {
    this.props.handleIsTimerRunning();
  }

  reset() {
    this.props.handleResetTimer();
  }

  addLapTime() {
    this.props.handleSetLapsList(this.props.currentTime);
  }

  render() {
    return (
      <div className='Stopwatch'>
        <Timer time={this.props.currentTime} />

        <Controls
          isRunning={this.props.isTimerRunning}
          start={() => this.start()}
          stop={() => this.stop()}
          reset={() => this.reset()}
          addLapTime={() => this.addLapTime()}
        />

        <LapTimeList timeList={this.props.lapsList} />
      </div>
    );
  }
}

export default Stopwatch;
