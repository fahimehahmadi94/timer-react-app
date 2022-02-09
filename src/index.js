import React from "react";
import ReactDOM from "react-dom";
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

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello/>
       <Timer/>
      </div>
    )
  }
}
class Hello extends React.Component{
  render(){
    return(
      <h1> Hi everyone</h1>
    )
  }
}
class Timer extends React.Component{
  render(){
    return(
      <h2>It is {new Date().toLocaleDateString()}</h2>
    )
  }
}
const tick = () => {
  ReactDOM.render(<App/>, document.getElementById("root"));
};

setInterval(() => {
  tick();
}, 1000);
