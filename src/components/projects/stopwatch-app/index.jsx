import React, { Component } from 'react';
import './stopwatch-app.css';

const formatTimer = seconds => {
  return Math.floor(seconds / 60) + ':' + ('0' + seconds % 60).slice(-2);
};

export default class StopwatchApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
      isStopped: false
    };

    this.handleResetButton = this.handleResetButton.bind(this);
    this.handleStartStopButton = this.handleStartStopButton.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((prevState, props) => ({
      timer: prevState.timer + 1
    }));
  }

  handleResetButton() {
    clearInterval(this.timerID);
    this.setState({
      timer: 0,
      isStopped: true
    });
  }

  handleStartStopButton() {
    if (this.state.isStopped) {
      this.setState({
        isStopped: false
      });
      this.timerID = setInterval(() => this.tick(), 1000);
    } else {
      clearInterval(this.timerID);
      this.setState({
        isStopped: true
      });
    }
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>StopWatch</h2>
        <p className="stopwatch-clock">{formatTimer(this.state.timer)}</p>
        <div>
          <button onClick={this.handleStartStopButton}>
            {this.state.isStopped ? 'Start' : 'Stop'}
          </button>
          <button onClick={this.handleResetButton}>Reset</button>
        </div>
      </div>
    );
  }
}
