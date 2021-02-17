import "./styles.css";
import React, { useState } from "react";

export default function Form() {
  var [text, settext] = useState("");

  function texthandle(event) {
    settext(event.target.value.length);
    //console.log(text);
  }

  return (
    <div className="Form">
      <textarea
        placeholder="Type Text"
        style={{
          display: "block",
          marginBottom: "5px",
          width: "300px",
          height: "100px",
          padding: "0"
        }}
        onChange={texthandle}
        maxlength="200"
      ></textarea>
      {text}/200
    </div>
  );
}
