"use client";
import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button
        onClick={() => setCounter((pri) => pri - 1)}
        className="btn btn-neutral"
      >
        -
      </button>
      <div>{counter}</div>
      <button
        onClick={() => setCounter((pri) => pri + 1)}
        className="btn btn-neutral"
      >
        +
      </button>
    </>
  );
};

export default Counter;
