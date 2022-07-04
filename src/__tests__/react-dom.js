import { render, screen } from "@testing-library/react";
import React from "react";
import Favoritenumber from "../favorite_number";

test('render a number input with a label "Favorite Number"', () => {
  render(<Favoritenumber />);
  const linkElement = screen.getByLabelText(/Favorite Number/i);
  expect(linkElement).toBeInTheDocument();
});
