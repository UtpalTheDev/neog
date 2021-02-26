import "./styles.css";
import Product from "./Product";
import React, { useState, useRef } from "react";
export default function App() {
  var [cartvalue, setvalue] = useState(0);
  var [cart, setcart] = useState({});
  var [cartshow, setcartshow] = useState("none");
  //console.log(cart);
  var cartlist = cart;
  var popup = "none";

  cartvaluesetter();
  function cartvaluesetter() {
    if (cartvalue === 0) {
      popup = "none";
      //console.log("here");
    } else {
      popup = "block";
      //console.log("there");
    }
  }

  function cartclick() {
    if (cartshow === "none") {
      setcartshow("block");
    } else {
      setcartshow("none");
    }
  }

  function deleting(name) {
    if (cartlist[name] === 1) {
      delete cartlist[name];
      setcart({ ...cart, ...cartlist });
      setvalue(cartvalue - 1);
    } else {
      cartlist[name] = cartlist[name] - 1;
      //console.log("old", cartlist);
      setvalue(cartvalue - 1);

      setcart({ ...cart, ...cartlist });
    }
  }

  function adding(name) {
    //console.log(cartlist[name]===undefined);

    if (cartlist[name] === undefined) {
      cartlist[name] = 1;

      //console.log("new", cartlist);
      setcart({ ...cart, ...cartlist });
      setvalue(cartvalue + 1);
    } else {
      cartlist[name] = cartlist[name] + 1;
      //console.log("old", cartlist);
      setvalue(cartvalue + 1);

      setcart({ ...cart, ...cartlist });
    }
  }

  function list() {
    if (cartlist !== undefined) {
      var cartarr = Object.keys(cartlist);
      //console.log(cartarr);
      return (
        <div className="cartlist" style={{ display: cartshow }}>
          {cartarr.map((item) => {
            return (
              <div key={item} className="selected">
                {item}------{cartlist[item]}kg
              </div>
            );
          })}
        </div>
      );
    }
  }

  return (
    <div className="App">
      <div className="navbar">
        <div className="cart">
          <div className="cartpopup" style={{ display: popup }}>
            {cartvalue}
          </div>
          <img
            onClick={cartclick}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fYPFuy5ypGwIotPEJMp_BAHaHa%26pid%3DApi&f=1"
            alt="kk"
          ></img>
          {list()}
        </div>
      </div>
      <Product
        add={adding}
        deleted={deleting}
        name="Banana"
        prdimg="https://images.unsplash.com/photo-1603052875302-d376b7c0638a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YmFuYW5hfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
      <Product
        add={adding}
        deleted={deleting}
        name="Apple"
        prdimg="https://images.unsplash.com/photo-1584306670957-acf935f5033c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
      <Product
        add={adding}
        deleted={deleting}
        name="Onion"
        prdimg="https://images.unsplash.com/photo-1588626174995-11643e2918ea?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8b25pb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
      <Product
        add={adding}
        deleted={deleting}
        name="Olive oil"
        prdimg="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8b2xpdmUlMjBvaWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
      />
    </div>
  );
}
