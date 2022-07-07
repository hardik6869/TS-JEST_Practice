import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState("0");
  const [inputValue, setInputValue] = useState(1);
  return (
    <div className="container">
      <div className="text-center">
        <h3 data-testid="title">My Counter</h3>
        <h2 data-testid="counter" className="py-3">
          {counter}
        </h2>
        <div className="text-center d-flex justify-content-center align-item-center py-3">
          <button data-testid="addBtn" className="btn btn-success btn-lg">
            +
          </button>
          <input
            data-testid="input"
            type="number"
            className="mx-4 border-secondry text-center"
            value={inputValue}
          />
          <button data-testid="subtractBtn" className="btn btn-danger btn-lg">
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
