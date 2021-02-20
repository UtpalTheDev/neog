import "./styles.css";
import React, { useState } from "react";
export default function Font({ size, fontfamily }) {
  var [visibility, setvisibility] = useState("none");
  function code() {
    return (
      <div>
        <div>font-family:{fontfamily};</div>
        <div>font-size:{size};</div>
      </div>
    );
  }

  function csscode() {
    console.log(size, fontfamily);
    if (visibility === "none") {
      setvisibility("block");
    } else {
      setvisibility("none");
    }
  }
  return (
    <div className="Font" onClick={() => csscode()}>
      {fontfamily}{" "}
      <div
        style={{
          width: "200px",
          height: "100px",
          fontSize: size,
          fontFamily: fontfamily,
          overflow: "hidden",
          border: "1px solid gray",
          margin: "10px 10px 20px 10px",
          cursor: "pointer",
          wordWrap: "breakword"
        }}
      >
        Hi what is your name?
      </div>
      <div
        style={{
          width: "200px",
          height: "50px",
          fontSize: "12px",
          border: "1px solid gray",
          margin: "0px 10px 10px 10px",
          wordWrap: "breakword",
          textAlign: "left",
          display: visibility
        }}
      >
        {code()}
      </div>
    </div>
  );
}
