import { render, screen } from "@testing-library/react";
import Counter from "../Counter/Counter";

test("Header render with currect test", () => {
  render(<Counter />);
  const labelElement = screen.getByTestId("counter");
  expect(labelElement.textContent).toBe("My Counter");
});
