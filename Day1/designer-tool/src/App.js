import "./styles.css";
import React, { useState } from "react";
import Font from "./Font";
export default function App() {
  var [size, setsize] = useState(8);

  function up() {
    if (size >= 50) {
    } else {
      setsize(size + 8);
    }
  }
  function down() {
    if (size === 8) {
    } else {
      setsize(size - 8);
    }
  }

  return (
    <div className="App">
      <div className="control">
        <button onClick={down}>-</button>
        {size}px<button onClick={up}>+</button>
      </div>
      <div className="fonts">
        <Font size={size} fontfamily="Roboto, sans-serif" />
        <Font size={size} fontfamily="'Ballet', cursive" />
        <Font size={size} fontfamily="'Reggae One', cursive" />
        <Font size={size} fontfamily="'Open Sans', sans-serif" />
        <Font size={size} fontfamily="'Brygada 1918', serif" />
        <Font size={size} fontfamily="'Anton', sans-serif" />
      </div>
    </div>
  );
}
