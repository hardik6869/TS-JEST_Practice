import { render, screen } from "@testing-library/react";
import App from "./App";

test("Header render with currect test", () => {
  render(<App />);
  const headerElement = screen.getByTestId("header");
  expect(headerElement.textContent).toBe("Wel-Come");
});
