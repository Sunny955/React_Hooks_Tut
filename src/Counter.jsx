import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const initialCount = 0;

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={() => setCounter(initialCount)}>Reset</button>
      <button onClick={handleClick}>Increment by 1</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement by 1</button>
      <button onClick={() => setCounter(counter + 10)}>Increment by 10</button>
      <p>Counter is : {counter}</p>
    </div>
  );
};
export default Counter;
