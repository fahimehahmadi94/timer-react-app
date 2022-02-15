import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Timer from "./Timer";
import Hello from "./Hello";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "HI",
    };
   
  } 
  handlelSetTitle = () => {
      this.setState({
        title: "خوش آمدید"
      })
    };
  render() {
    return (
      <div className="main">
        <Hello title={this.state.title} />
        <Timer handlelSetTitle={this.handlelSetTitle}/>
      </div>
    );
  }
}
export default App;
