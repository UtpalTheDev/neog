import "./styles.css";
import React, { useState, usState } from "react";
export default function App() {
  var [mode, setmode] = useState("light");

  function clickhandle() {
    if (mode === "light") {
      setmode("dark");
    } else {
      setmode("light");
    }
  }
  if (mode === "dark") {
    var bg = "black";
    var btn = "White";
    var clr = "white";
  } else {
    bg = "white";
    btn = "dark";
    clr = "black";
  }

  return (
    <div
      className="App"
      style={{
        backgroundColor: bg,
        width: "100vw",
        height: "100vh",
        color: clr
      }}
    >
      <button onClick={clickhandle}>{btn}</button>
      acbabcbajcbbajcbjhahbcbshhhhhhhhhhhhhhhhhbajsbabscbascbsacbcbasbcjhabcshabbcshbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbchsahchszchasvhavhvcsv
    </div>
  );
}
