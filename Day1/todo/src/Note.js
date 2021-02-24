import React, { useState } from "react";
import "./styles.css";

export default function Note({ iteming }) {
  var [striker, setstriker] = useState("none");

  function striking() {
    if (striker === "none") {
      setstriker("line-through");
    } else {
      setstriker("none");
    }
  }
  return (
    <div
      className="Note"
      onClick={striking}
      style={{ textDecoration: striker, cursor: "pointer" }}
    >
      {iteming}
    </div>
  );
}
