import React, { Component } from 'react';
import './Controls.css';

class Controls extends Component {
  static defaultProps = {
    isRunning: false,
  };

  render() {
    const { isRunning, start, stop, reset, addLapTime } = this.props;

    return (
      <div className='Controls'>
        <div className='btnGroup'>
          {!isRunning ? (
            <button onClick={start} className='timerBtn'>
              Start
            </button>
          ) : (
            <button onClick={stop} className='timerBtn'>
              Stop
            </button>
          )}
          <button onClick={reset} disabled={isRunning} className='timerBtn'>
            Reset
          </button>
          <button
            onClick={addLapTime}
            disabled={!isRunning}
            className='timerBtn'>
            Lap Time
          </button>
        </div>
      </div>
    );
  }
}

export default Controls;
