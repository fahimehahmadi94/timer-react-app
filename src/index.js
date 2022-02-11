import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
//part 7
// const tick = () => {
//   const elem = (
//     <div>
//       <h1>Hi everyone</h1>
//       <h2>It is {new Date().toLocaleString() } </h2>
//     </div>
//   );
//   ReactDOM.render(elem, document.getElementById("root"));
// };

// setInterval(() => {
//   tick();
// }, 1000);
//part 8

// class App extends React.Component {
//   render() {
//     return (
//       <div className="main">
//         <Hello/>
//        <Timer />
//       </div>
//     )
//   }
// }
// class Hello extends React.Component{
//   render(){
//     return(
//       <h1> Hi everyone</h1>
//     )
//   }
// }
// class Timer extends React.Component{
//   render(){
//     return(
//       <h2 className="timer">It is {new Date().toLocaleTimeString()}</h2>
//     )
//   }
// }
// const tick = () => {
//   ReactDOM.render(<App/>, document.getElementById("root"));
// };

// setInterval(() => {
//   tick();
// }, 1000);
//part9
class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Hello />
        <Timer />
      </div>
    );
  }
}
class Hello extends React.Component {
  render() {
    return <h1> Hi everyone</h1>;
  }
}
class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  render() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);

    return <h2 className="timer">It is {this.state.time}</h2>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
