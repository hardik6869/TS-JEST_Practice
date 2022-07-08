import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const addToCounter = () => {
    setCounter(counter + inputValue);
  };

  const subtractToCounter = () => {
    setCounter(counter - inputValue);
  };
  return (
    <div className="container">
      <div className="text-center">
        <h3 data-testid="title">My Counter</h3>
        <h2
          data-testid="counter"
          className={`${counter >= 100 ? "text-success" : ""}${
            counter <= -100 ? "text-danger" : ""
          }`}
        >
          {counter}
        </h2>
        <div className="text-center d-flex justify-content-center align-item-center py-3">
          <button
            data-testid="addBtn"
            className="btn btn-success btn-lg"
            onClick={addToCounter}
          >
            +
          </button>
          <input
            data-testid="input"
            type="number"
            className="mx-4 border-secondry text-center"
            value={inputValue}
            onChange={(e) => {
              setInputValue(parseInt(e.target.value));
            }}
          />
          <button
            data-testid="subtractBtn"
            className="btn btn-danger btn-lg"
            onClick={subtractToCounter}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
