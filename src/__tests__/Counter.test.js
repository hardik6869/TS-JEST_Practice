import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
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

test("Change value of input works currectly", () => {
  render(<Counter />);
  const inputElement = screen.getByTestId("input");
  expect(inputElement.value).toBe("1");
  fireEvent.change(inputElement, {
    target: { value: "5" },
  });
  expect(inputElement.value).toBe("5");
});

test("click on plus button adds 1 to counter", () => {
  render(<Counter />);
  const addBtnElement = screen.getByTestId("addBtn");
  const counterElement = screen.getByTestId("counter");
  expect(counterElement.textContent).toBe("0");
  fireEvent.click(addBtnElement);
  expect(counterElement.textContent).toBe("1");
});

test("click on subtract button subtracts 1 from counter", () => {
  render(<Counter />);
  const subtractBtnElement = screen.getByTestId("subtractBtn");
  const counterElement = screen.getByTestId("counter");
  expect(counterElement.textContent).toBe("0");
  fireEvent.click(subtractBtnElement);
  expect(counterElement.textContent).toBe("-1");
});

test("changing input value then clicking on add btn work currently", () => {
  render(<Counter />);
  const addBtnElement = screen.getByTestId("addBtn");
  const counterElement = screen.getByTestId("counter");
  const inputElement = screen.getByTestId("input");
  fireEvent.change(inputElement, {
    target: {
      value: "5",
    },
  });
  expect(counterElement.textContent).toBe("0");
  fireEvent.click(addBtnElement);
  expect(counterElement.textContent).toBe("5");
});

test("changing input value then clicking on subtract btn work currently", () => {
  render(<Counter />);
  const subtractBtnElement = screen.getByTestId("subtractBtn");
  const counterElement = screen.getByTestId("counter");
  const inputElement = screen.getByTestId("input");
  fireEvent.change(inputElement, {
    target: {
      value: "5",
    },
  });
  expect(counterElement.textContent).toBe("0");
  fireEvent.click(subtractBtnElement);
  expect(counterElement.textContent).toBe("-5");
});

test("adding and then subtracting leads to the correct counter number", () => {
  render(<Counter />);
  const addBtnElement = screen.getByTestId("addBtn");
  const subtractBtnElement = screen.getByTestId("subtractBtn");
  const counterElement = screen.getByTestId("counter");
  const inputElement = screen.getByTestId("input");
  fireEvent.change(inputElement, {
    target: {
      value: "10",
    },
  });
  fireEvent.click(addBtnElement);
  fireEvent.click(addBtnElement);
  fireEvent.click(addBtnElement);
  fireEvent.click(addBtnElement);
  fireEvent.click(subtractBtnElement);
  fireEvent.click(subtractBtnElement);
  expect(counterElement.textContent).toBe("20");
  fireEvent.change(inputElement, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(addBtnElement);
  fireEvent.click(subtractBtnElement);
  fireEvent.click(subtractBtnElement);
  expect(counterElement.textContent).toBe("15");
});

test("counter contain correct class name", () => {
  render(<Counter />);
  const counterElement = screen.getByTestId("counter");
  const inputElement = screen.getByTestId("input");
  const addBtnElement = screen.getByTestId("addBtn");
  const subtractBtnElement = screen.getByTestId("subtractBtn");
  expect(counterElement.className).toBe("");
  fireEvent.change(inputElement, {
    target: {
      value: "50",
    },
  });
  fireEvent.click(addBtnElement);
  expect(counterElement.className).toBe("");
  fireEvent.click(addBtnElement);
  expect(counterElement.className).toBe("text-success");
  fireEvent.click(addBtnElement);
  expect(counterElement.className).toBe("text-success");
  fireEvent.click(subtractBtnElement);
  fireEvent.click(subtractBtnElement);
  expect(counterElement.className).toBe("");
  fireEvent.click(subtractBtnElement);
  fireEvent.click(subtractBtnElement);
  fireEvent.click(subtractBtnElement);
  fireEvent.click(subtractBtnElement);
  expect(counterElement.className).toBe("text-danger");
});
