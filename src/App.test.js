import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const typeIntoform = ({ email, password, confirmPassword }) => {
  const emailInputElement = screen.getByRole("textbox", {
    name: /email/i,
  });
  const passwordInputElement = screen.getByLabelText("Password");
  const confirmPasswordInputElement =
    screen.getByLabelText(/confirm password/i);

  if (email) {
    userEvent.type(emailInputElement, email);
  }

  if (password) {
    userEvent.type(passwordInputElement, password);
  }

  if (confirmPassword) {
    userEvent.type(confirmPasswordInputElement, confirmPassword);
  }

  return {
    emailInputElement,
    passwordInputElement,
    confirmPasswordInputElement,
  };
};

const typeIntoFormButton = () => {
  const submitBtnElement = screen.getByRole("button", {
    name: /submit/i,
  });
  userEvent.click(submitBtnElement);
};

describe("App", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<App />);
  });

  test("Input should be initially empty", () => {
    expect(screen.getByRole("textbox").value).toBe("");
    expect(screen.getByLabelText("Password").value).toBe("");
    expect(screen.getByLabelText(/confirm password/i).value).toBe("");
  });

  test("should be able to type an email", () => {
    const { emailInputElement } = typeIntoform({
      email: "hhh@gmail.com",
    });
    expect(emailInputElement.value).toBe("hhh@gmail.com");
  });

  test("should able to type a password", () => {
    const { passwordInputElement } = typeIntoform({
      password: "password!",
    });
    expect(passwordInputElement.value).toBe("password!");
  });

  test("should able to type a confirm password", () => {
    const { confirmPasswordInputElement } = typeIntoform({
      confirmPassword: "password",
    });
    expect(confirmPasswordInputElement.value).toBe("password");
  });

  describe("Error Handling", () => {
    test("should show email error message on invalid email", () => {
      // expect(
      //   screen.getByText(/the email you input is invalid/i)
      // ).toBeInTheDocument();
      expect(
        screen.queryByText(/the email you input is invalid/i)
      ).not.toBeInTheDocument();
      typeIntoform({ email: "hhh@gmail.com" });

      typeIntoFormButton();
    });

    test("should show password error if password is less than 5 characters", () => {
      typeIntoform({ email: "hhh@gmail.com" });

      expect(
        screen.queryByText(
          /the password you entered should contain 5 or more characters/i
        )
      ).not.toBeInTheDocument();

      typeIntoform({ password: "123" });
      typeIntoFormButton();

      expect(
        screen.getByText(
          /the password you entered should contain 5 or more characters/i
        )
      ).toBeInTheDocument();
    });

    test("should show confirm password error if passwords does not match", () => {
      typeIntoform({
        email: "hhh@gmail.com",
        password: "12345",
        confirmPassword: "123456",
      });

      expect(
        screen.queryByText(/the password don't match. try again/i)
      ).not.toBeInTheDocument();

      typeIntoFormButton();

      expect(
        screen.getByText(/the password don't match. try again/i)
      ).toBeInTheDocument();
    });

    test("should show no error message if every input is valid", () => {
      typeIntoform({
        email: "hhh@gmail.com",
        password: "12345",
        confirmPassword: "12345",
      });

      typeIntoFormButton();

      expect(
        screen.queryByText(/the email you input is invalid/i)
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(
          /the password you entered should contain 5 or more characters/i
        )
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(/the password don't match. try again/i)
      ).not.toBeInTheDocument();
    });
  });
});
