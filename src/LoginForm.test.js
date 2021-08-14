import { render, screen } from "@testing-library/react";
import App from "./App";
import LoginForm from "./LoginForm";

test("Renders text for all input fields", () => {
  render(<LoginForm />);
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