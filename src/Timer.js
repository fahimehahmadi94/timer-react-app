import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

let interval;

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount() {
    interval = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.time=="5:43:15 PM") {
      clearInterval(interval);
    }
  }
  componentWillUnmount() {}
  render() {
    return <h2 className="timer">It is {this.state.time}</h2>;
  }
}

export default Timer;
