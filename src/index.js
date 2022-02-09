import React from "react";
import ReactDOM from "react-dom";

const tick = () => {
  const elem = (
    <div>
      <h1>Hi everyone</h1>
      <h2>It is {new Date().toLocaleString() } </h2>
    </div>
  );
  ReactDOM.render(elem, document.getElementById("root"));
};

setInterval(() => {
  tick();
}, 1000);
