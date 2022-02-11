import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Timer from './Timer';
import Hello from './Hello';

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
  export default App;