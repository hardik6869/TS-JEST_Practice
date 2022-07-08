import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../Counter/Counter";

describe("Counter", () => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  beforeEach(() => render(<Counter />));
  describe("Initial value", () => {
    test("Header render with currect test", () => {
      expect(screen.getByTestId("title").textContent).toBe("My Counter");
    });

    test("counter initially start with text of zero", () => {
      expect(screen.getByTestId("counter").textContent).toBe("0");
    });

    test("input co ntaine initial value of 1", () => {
      expect(screen.getByTestId("input").value).toBe("1");
    });

    test("Add button renders with +", () => {
      expect(screen.getByTestId("addBtn").textContent).toBe("+");
    });

    test("Subtract button renders with -", () => {
      expect(screen.getByTestId("subtractBtn").textContent).toBe("-");
    });
  });

  test("Change value of input works currectly", () => {
    const inputElement = screen.getByTestId("input");
    expect(inputElement.value).toBe("1");
    fireEvent.change(inputElement, {
      target: { value: "5" },
    });
    expect(inputElement.value).toBe("5");
  });

  test("click on plus button adds 1 to counter", () => {
    const counterElement = screen.getByTestId("counter");
    expect(counterElement.textContent).toBe("0");
    fireEvent.click(screen.getByTestId("addBtn"));
    expect(counterElement.textContent).toBe("1");
  });

  test("click on subtract button subtracts 1 from counter", () => {
    const counterElement = screen.getByTestId("counter");
    expect(counterElement.textContent).toBe("0");
    fireEvent.click(screen.getByTestId("subtractBtn"));
    expect(counterElement.textContent).toBe("-1");
  });

  test("changing input value then clicking on add btn work currently", () => {
    const counterElement = screen.getByTestId("counter");
    fireEvent.change(screen.getByTestId("input"), {
      target: {
        value: "5",
      },
    });
    expect(counterElement.textContent).toBe("0");
    fireEvent.click(screen.getByTestId("addBtn"));
    expect(counterElement.textContent).toBe("5");
  });

  test("changing input value then clicking on subtract btn work currently", () => {
    const counterElement = screen.getByTestId("counter");
    fireEvent.change(screen.getByTestId("input"), {
      target: {
        value: "5",
      },
    });
    expect(counterElement.textContent).toBe("0");
    fireEvent.click(screen.getByTestId("subtractBtn"));
    expect(counterElement.textContent).toBe("-5");
  });

  test("adding and then subtracting leads to the correct counter number", () => {
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
    const counterElement = screen.getByTestId("counter");
    const addBtnElement = screen.getByTestId("addBtn");
    const subtractBtnElement = screen.getByTestId("subtractBtn");
    expect(counterElement.className).toBe("");
    fireEvent.change(screen.getByTestId("input"), {
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
});
