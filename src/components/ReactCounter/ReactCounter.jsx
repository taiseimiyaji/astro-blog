import React, { useState } from 'react';
import './ReactCounter.scss';


/** a counter written in React */
export default function Counter({ children }) {
  const [count, setCount] = useState(0);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <div className="hoge" >
        <div className="counter">
          <button onClick={subtract}>-</button>
          <pre>{count}</pre>
          <button onClick={add}>+</button>
        </div>
          <div className="children">{children}</div>
        </div>
    </>
  );
}