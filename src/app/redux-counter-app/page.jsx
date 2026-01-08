"use client"

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "@/store/counterSlice";

export default function ReduxCounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1 className="fw-bold mt-3">Redux counter</h1>
      <h2 className="text-center mt-2">{count}</h2>

      <div className="d-flex align-items-center justify-content-center gap-2 mt-3">
        <button
          onClick={() => dispatch(increment())}
          className="btn btn-primary"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="btn btn-secondary"
        >
          Decrement
        </button>
        <button onClick={() => dispatch(reset())} className="btn btn-info">
          Reset
        </button>
      </div>
    </div>
  );
}
