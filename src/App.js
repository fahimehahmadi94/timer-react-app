import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Timer from "./Timer";
import Hello from "./Hello";
import TimeList from "./TimeList";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "HI",
//     };
//   }
//   handlelSetTitle = () => {
//     this.setState({
//       title: "خوش آمدید",
//     });
//   };
//   render() {
//     return (
//       <div className="main">
//         <Hello title={this.state.title} />
//         <Timer handlelSetTitle={this.handlelSetTitle} />
//       </div>
//     );
//   }
// }
const App = () => {
  const [title, setTitle] = useState("salam dostam");
  const [isLight, setIsLight] = useState(false);
  const [timeArr, setTimeArr] = useState(["00 : 05 : 12"]);

  useEffect(() => {
    console.log("useEfect");
    return () => {};
  }, [isLight]);

  const handlelSetIsLight = () => {
    setIsLight(!isLight);
  };

  return (
    <div className="main" style={{ background: isLight ? "white" : "black" }}>
      <Hello title={title} />
      <Timer
        timeArr={timeArr}
        setTimeArr={setTimeArr}
        isLight={isLight}
        handlelSetIsLight={handlelSetIsLight}
      />
     
    </div>
  );
};
export default App;
