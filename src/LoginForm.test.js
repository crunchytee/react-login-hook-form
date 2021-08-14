import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import LoginForm from "./LoginForm";

describe("LoginForm ", () => {
  render(<LoginForm />)
  test("Renders text for all input fields", () => {
    const linkElements = {
      "first-name": screen.getByText("First Name"),
      "last-name": screen.getByText("Last Name"),
      "email-address": screen.getByText("Email Address"),
      "password": screen.getByText("Password"),
      "confirm-password": screen.getByText("Confirm Password"),
      "phone-number": screen.getByText("Phone Number (Optional)")};
    Object.values(linkElements).map((value) => {
      expect(value).toBeInTheDocument();
    });
  });
  
  test("Does not validate First Name when the input is one character long", () => {
    fireEvent.input(screen.getByLabelText("First Name"), {
      target: {value: "a"}
    });
    const fNameError = screen.getByText("First name must be at least 2 characters");
    expect(fNameError).toBeInTheDocument();
  });
});