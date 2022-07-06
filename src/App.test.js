import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

beforeEach(() => {
  console.log("This will run before each test");
  render(<App />);
});

beforeAll(() => {
  console.log("This will run once before all of the test");
});

afterAll(() => {
  console.log("This will run once after all of the test");
});

afterEach(() => {
  console.log("This will run after each test");
});

test("Input should be initially empty", () => {
  const emailInputElement = screen.getByRole("textbox");
  const passwordInputElement = screen.getByLabelText("Password");
  const confirmPasswordInputElement =
    screen.getByLabelText(/confirm password/i);
  expect(emailInputElement.value).toBe("");
  expect(passwordInputElement.value).toBe("");
  expect(confirmPasswordInputElement.value).toBe("");
});

test("should be able to type an email", () => {
  const emailInputElement = screen.getByRole("textbox", {
    name: /email/i,
  });
  userEvent.type(emailInputElement, "hhh@gmail.com");
  expect(emailInputElement.value).toBe("hhh@gmail.com");
});

test("should able to type a password", () => {
  const passwordInputElement = screen.getByLabelText("Password");
  userEvent.type(passwordInputElement, "password!");
  expect(passwordInputElement.value).toBe("password!");
});

test("should able to type a confirm password", () => {
  const confirmPasswordInputElement =
    screen.getByLabelText(/confirm password/i);
  userEvent.type(confirmPasswordInputElement, "password");
  expect(confirmPasswordInputElement.value).toBe("password");
});

test("should show email error message on invalid email", () => {
  const emailErrorElement = screen.queryByText(
    /the email you input is invalid/i
  );
  // const emailErrorElementAgain = screen.queryByText(
  //   /the email you input is invalid/i
  // );
  const emailInputElement = screen.getByRole("textbox", {
    name: /email/i,
  });
  const submitBtnElement = screen.getByRole("button", {
    name: /submit/i,
  });

  expect(emailErrorElement).not.toBeInTheDocument();
  // expect(emailErrorElementAgain).toBeInTheDocument();
  userEvent.type(emailInputElement, "hhh@gmail.com");
  userEvent.click(submitBtnElement);
});

test("should show password error if password is less than 5 characters", () => {
  const emailInputElement = screen.getByRole("textbox", {
    name: /email/i,
  });

  const passwordInputElement = screen.getByLabelText("Password");

  const passwordErrorElement = screen.queryByText(
    /the password you entered should contain 5 or more characters/i
  );

  const submitBtnElement = screen.getByRole("button", {
    name: /submit/i,
  });

  userEvent.type(emailInputElement, "hhh@gmail.com");

  expect(passwordErrorElement).not.toBeInTheDocument();

  userEvent.type(passwordInputElement, "123");
  userEvent.click(submitBtnElement);
  const passwordErrorElementAgain = screen.queryByText(
    /the password you entered should contain 5 or more characters/i
  );
  expect(passwordErrorElementAgain).toBeInTheDocument();
});

test("should show confirm password error if passwords does not match", () => {
  const emailInputElement = screen.getByRole("textbox", {
    name: /email/i,
  });

  const passwordInputElement = screen.getByLabelText("Password");

  const confirmPasswordInputElement =
    screen.getByLabelText(/confirm password/i);

  const confirmPasswordErrorElement = screen.queryByText(
    /the password don't match. try again/i
  );

  const submitBtnElement = screen.getByRole("button", {
    name: /submit/i,
  });

  userEvent.type(emailInputElement, "hhh@gmail.com");
  userEvent.type(passwordInputElement, "12345");

  expect(confirmPasswordErrorElement).not.toBeInTheDocument();

  userEvent.type(confirmPasswordInputElement, "123456");
  userEvent.click(submitBtnElement);

  const confirmPasswordInputElementAgain = screen.queryByText(
    /the password don't match. try again/i
  );
  expect(confirmPasswordInputElementAgain).toBeInTheDocument();
});

test("should show no error message if every input is valid", () => {
  const emailInputElement = screen.getByRole("textbox", {
    name: /email/i,
  });
  const passwordInputElement = screen.getByLabelText("Password");
  const confirmPasswordInputElement =
    screen.getByLabelText(/confirm password/i);
  const submitBtnElement = screen.getByRole("button", {
    name: /submit/i,
  });

  userEvent.type(emailInputElement, "hhh@gmail.com");
  userEvent.type(passwordInputElement, "12345");
  userEvent.type(confirmPasswordInputElement, "12345");
  userEvent.click(submitBtnElement);

  const emailErrorElement = screen.queryByText(
    /the email you input is invalid/i
  );
  const passwordErrorElement = screen.queryByText(
    /the password you entered should contain 5 or more characters/i
  );
  const confirmPasswordInputElementAgain = screen.queryByText(
    /the password don't match. try again/i
  );
  expect(emailErrorElement).not.toBeInTheDocument();
  expect(passwordErrorElement).not.toBeInTheDocument();
  expect(confirmPasswordInputElementAgain).not.toBeInTheDocument();
});
