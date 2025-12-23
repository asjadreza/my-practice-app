"use client";

import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container mt-3">
      <h1>Counter app</h1>

      <div className="d-flex justify-content-center mt-5">
        <h3>Count: {count}</h3>
      </div>

      <div className="d-flex align-items-center gap-2 mt-3 justify-content-center">
        <button className="btn btn-primary" onClick={handleIncrease}>
          Increase
        </button>
        <button className="btn btn-info" onClick={handleDecrease}>
          Decrease
        </button>
        <button className="btn btn-secondary" onClick={reset}>
          reset
        </button>
      </div>
    </div>
  );
}
