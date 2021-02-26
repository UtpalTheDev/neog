import "./styles.css";
import React, { useState } from "react";

export default function Product({ add, deleted, name, prdimg }) {
  var [quant, setquant] = useState(0);

 
  function quantincreaser() {
    setquant(quant + 1);
  }
  function quantdecreaser() {
    if (quant > 0) {
      setquant(quant - 1);
    }
  }

  function quantity() {
    if (quant === 0) {
      return (
        <button
          className="simpleadd"
          onClick={() => {
            add(name);
            quantincreaser();
          }}
        >
          Add
        </button>
      );
    } else {
      return (
        <div className="addbtn">
          <button
            onClick={() => {
              deleted(name);
              quantdecreaser();
            }}
          >
            -
          </button>
          {quant}
          <button
            onClick={() => {
              add(name);
              quantincreaser();
            }}
          >
            +
          </button>
        </div>
      );
    }
  }

  return (
    <div className="Product">
      <div className="product">
        <img src={prdimg} alt="product"></img>
        {quantity()}
      </div>
    </div>
  );
}
