import React from "react";

const FavoriteNumber = ({ min = 1, max = 9 }) => {
  const [number, setNumber] = React.useState(0);
  const [numberEntered, setNumberEntered] = React.useState(false);

  const handleChange = (e) => {
    setNumber(Number(e.target.value));
    setNumberEntered(true);
  };
  const isValid = !numberEntered || (number >= min && number <= max);
  return (
    <div>
      <label htmlFor="favorite-number"> Favorite Number</label>
      <input
        type="number"
        id="favorite-number"
        value={number}
        onChange={handleChange}
      />
      {isValid ? null : <div role="alert"> Number is Invalid</div>}
    </div>
  );
};

export default FavoriteNumber;
