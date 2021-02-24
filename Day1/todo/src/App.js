import "./styles.css";
import React, { useState } from "react";
import Note from "./Note";
export default function App() {
  var [desc, setdesc] = useState("");
  var [list, setlist] = useState({});
  var listing = list;
  var listarr = Object.keys(list);
  function settext(event) {
    setdesc(event.target.value);
  }
  function adding() {
    if (desc === "") {
    } else {
      console.log(desc);
      listing[desc] = { pri: "no", id: 2 };
      console.log(listing);
      setlist({ ...list, ...listing });
    }
  }

  return (
    <div className="App">
      <input type="text" onChange={settext} />
      <button onClick={adding}>add</button>
      {listarr.map((item) => {
        return <Note iteming={item} />;
      })}
    </div>
  );
}
