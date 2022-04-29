import React, { useState } from "react";

function Uygulama1() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>React Counter</h1>
      <span id="counter">{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}

export default Uygulama1;
