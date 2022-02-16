import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Timer from "./Timer";
import Hello from "./Hello";
import TimeList from "./TimeList";
import { TestContext } from "./TestContext";

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
    <TestContext.Provider
      value={{
        timeArr: timeArr,
        setTimeArr:setTimeArr
      }}
    >
      <div className="main" style={{ background: isLight ? "white" : "black" }}>
        <Hello title={title} />
        <Timer
          isLight={isLight}
          handlelSetIsLight={handlelSetIsLight}
        />
      </div>
    </TestContext.Provider>
  );
};
export default App;
