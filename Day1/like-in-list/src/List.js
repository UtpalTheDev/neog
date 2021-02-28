import "./styles.css";
import React, { useState, useEffect, useRef } from "react";

export default function List({ pos, id, desc, like, func }) {
  //let [likevalue,setlike]=useState(like);
  let click = useRef(0);

  function likehandle() {
    // return likevalue>0?setlike(likevalue-1):setlike(likevalue+1)
    if (click.current === 0) {
      click.current = click.current + 1;
      func(like + 1, pos);
    } else {
      click.current = click.current - 1;
      func(like - 1, pos);
    }
  }
  // console.log("r",likevalue);

  return (
    <div className="List">
      <div>
        {desc} {like}
        <button onClick={likehandle}>
          {click.current === 0 ? "Like" : "Unlike"}
        </button>
      </div>
    </div>
  );
}
