import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react/cjs/react.production.min";
import "./style.css";
import { TestContext } from "./TestContext";
import TimeList from "./TimeList";

// let interval;

// class Timer extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       time: new Date().toLocaleTimeString(),
//     };
//   }
//   componentDidMount() {
//     interval = setInterval(() => {
//       this.setState({
//         time: new Date().toLocaleTimeString(),
//       });
//     }, 1000);
//   }

//   componentDidUpdate() {
//     if (this.state.time=="5:43:15 PM") {
//       clearInterval(interval);
//     }
//   }
//   componentWillUnmount() {}
//   render() {
//     return <h2 className="timer">It is {this.state.time}</h2>;
//   }
// }
//workout

let interval;

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      isStart: false,
      hour: 0,
      minute: 0,
      second: 0,
    };
  }
  startInterval = () => {
    if (this.state.isStart == false) {
      this.setState({
        isStart: true,
      });

      interval = setInterval(() => {
        this.setState({
          second: this.state.second + 1,
        });

        if (this.state.second == 60) {
          this.setState({
            second: 0,
            minute: this.state.minute + 1,
          });
        }
        if (this.state.minute == 60) {
          this.setState({
            minute: 0,
            hour: this.state.hour + 1,
          });
        }
      }, 1000);
    }
  };

  stopInterval = () => {
    this.setState({
      isStart: false,
    });
    clearInterval(interval);
  };
  resetInterval = () => {
    this.stopInterval();
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
    });
  };

  handelSaveTime = () => {
    let h = this.state.hour;
    let m = this.state.minute;
    let s = this.state.second;
    let newTime = `${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m}: ${
      s > 9 ? s : "0" + s
    }`;
    this.context.setTimeArr([...this.context.timeArr, newTime]);
  };
  static contextType = TestContext;
  componentDidMount() {}

  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    let h = this.state.hour;
    let m = this.state.minute;
    let s = this.state.second;
    return (
      <div>
        <h2 className="timer" onClick={this.handelSaveTime}>
          {`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m}: ${
            s > 9 ? s : "0" + s
          }`}
        </h2>

        <div className="w-btn">
          <button className="btn btn-start" onClick={this.startInterval}>
            Start
          </button>
          <button className="btn btn-stop" onClick={this.stopInterval}>
            Stop
          </button>
          <button className="btn btn-reset" onClick={this.resetInterval}>
            Reset
          </button>

          <button
            className="btn btn-reset"
            onClick={this.props.handlelSetIsLight}
            style={{
              background: this.props.isLight ? "black" : "white",
              color: this.props.isLight ? "white" : "black",
            }}
          >
            {this.props.isLight ? "dark" : "light"}
          </button>
        </div>
      </div>
    );
  }
}
export default Timer;
