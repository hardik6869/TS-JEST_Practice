import { render, screen } from "@testing-library/react";
import Counter from "../Counter/Counter";

test("Header render with currect test", () => {
  render(<Counter />);
  const labelElement = screen.getByTestId("title");
  expect(labelElement.textContent).toBe("My Counter");
});

test("counter initially start with text of zero", () => {
  render(<Counter />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement.textContent).toBe("0");
});

test("input co ntaine initial value of 1", () => {
  render(<Counter />);
  const inputElement = screen.getByTestId("input");
  expect(inputElement.value).toBe("1");
});

test("Add button renders with +", () => {
  render(<Counter />);
  const addBtn = screen.getByTestId("addBtn");
  expect(addBtn.textContent).toBe("+");
});

test("Subtract button renders with -", () => {
  render(<Counter />);
  const subtractBtn = screen.getByTestId("subtractBtn");
  expect(subtractBtn.textContent).toBe("-");
});
