import { useState } from "react";
import "./test.css";

export default function Testing() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Student");

  function increment() {
    console.log("Incrementing");
    setCount(count + 1);
  }

  function decrement() {
    console.log("Decrementing");
    if(count>=1){
    setCount(count - 1); // Corrected to use setCount
  }
}

function changeName(value){
    setName(value)
}

  return (
    <div className="background">
        <h1>{name}</h1>
      <button className="val" onClick={decrement}>-</button>
      <span>{count}</span>
      <button  className="val" onClick={increment}>+</button>
    

    <div className="classPannel">
        <button onClick={()=>changeName("Student")}>Students</button>
        <button onClick={()=>changeName("Teachers")}>Teachers</button>
        <button onClick={()=>changeName("Admin")}>Admin</button>
        </div>
        </div>      

  );
}
