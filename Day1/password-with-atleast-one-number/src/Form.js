import "./styles.css";
import React, { useState } from "react";

export default function Form() {
  var [pwd, setpwd] = useState("");
  //var [text,settext]=useState("");
  var [show, setshow] = useState("Show");
  var inputtype = "password";
  var text = "";
  var disable = true;
  function firstpwd(event) {
    setpwd(event.target.value);

    //console.log("init",initialpwd);
  }

  function submitclick(event) {
    event.preventDefault();
    console.log(pwd);
  }
  function showing() {
    //console.log("kk");
    if (show === "Show") {
      setshow("Hide");
    } else {
      setshow("Show");
    }
    // console.log(inputtype);
  }

  if (show === "Hide") {
    inputtype = "text";
  } else {
    inputtype = "password";
  }

  pwdchecker();
  function pwdchecker() {
    if (pwd.length > 0) {
      /* for (var i = 0; i < pwd.length; i++) {
        if ("0123456789".includes(pwd[i])) {
          console.log("match");
          disable = false;

          return;
        }
      }*/
      var patt1 = new RegExp("[a-zA-Z]+");
      var patt2 = new RegExp("[0-9]+");

      if (patt1.test(pwd) && patt2.test(pwd)) {
        //console.log("match");
        text = "";
        disable = false;
        return;
      }

      //return "At least one number is required";
      text = "Charcter with number is required";
    }
  }
  return (
    <div className="Form">
      <form>
        <input
          type={inputtype}
          placeholder="Type password"
          style={{ display: "block", marginBottom: "5px" }}
          onChange={firstpwd}
        ></input>
        <div>
          <input
            type="button"
            style={{ display: "block", marginBottom: "5px" }}
            value={show}
            onClick={showing}
          ></input>
        </div>
        <div>
          <button
            type="submit"
            style={{ display: "block", marginBottom: "5px" }}
            disabled={disable}
            onClick={submitclick}
          >
            Submit
          </button>
          {text}
        </div>
      </form>
    </div>
  );
}
