import "./styles.css";
import React, { useState } from "react";
export default function App() {
  var [visible, setvisible] = useState("none");

  function clickhandle() {
    if (visible === "none") {
      setvisible("block");
      //console.log("1");
    } else {
      setvisible("none");
      //console.log("2");
    }
  }
  return (
    <div className="App">
      <div>
        <button onClick={clickhandle}>Show</button>
      </div>
      <div className="toast" style={{ display: visible }}>
        <button onClick={clickhandle}>X</button> Hi, how can i hellp you?
      </div>
    </div>
  );
}
