import "./styles.css";
import List from "./List";
import { useState, useRef } from "react";
export default function App() {
  let [refresh, setrefresh] = useState(0);
  let obj = useRef([
    { id: 1, desc: "hello", totallike: 5 },
    { id: 2, desc: "i am raj", totallike: 0 }
  ]);
  console.log(obj);
  function setter(input, location) {
    obj.current[location].totallike = input;
    console.log(obj.current[location].totallike);
    refresh === 0 ? setrefresh(1) : setrefresh(0);
  }
  return (
    <div className="App">
      {obj.current.map((item, index) => {
        return (
          <List
            key={item.id}
            pos={index}
            id={item.id}
            desc={item.desc}
            like={item.totallike}
            func={setter}
          />
        );
      })}
    </div>
  );
}
