import { fireEvent, render, screen} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import {createMemoryHistory} from 'history'
import LoginForm from "./LoginForm";
import { Router, Route, Switch, Link } from "react-router-dom";
import Success from "./Success";

describe("LoginForm ", () => {
  const history = createMemoryHistory()
  const route = '/login'
  history.push(route)
  beforeEach(() => {render(
      <Router history={history}>
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Link to="/login" className="button">
            Show Form
          </Link>
        </Switch>
      </Router>
  )});
  
  // Check for all input fields
  test("Renders text for all input fields", () => {
    const linkElements = {
      "first-name": screen.getByLabelText("First Name"),
      "last-name": screen.getByLabelText("Last Name"),
      "email-address": screen.getByLabelText("Email Address"),
      "password": screen.getByLabelText("Password"),
      "confirm-password": screen.getByLabelText("Confirm Password"),
      "phone-number": screen.getByLabelText("Phone Number (Optional)")};
    Object.values(linkElements).map((value) => {
      expect(value).toBeInTheDocument();
    });
  });
  
  describe("Does not validate ", () => {
    // Check fname invalidator / display error message
    test("First Name when the input is one character long", async () => {
        const firstName = screen.getByLabelText("First Name");
        const submitButton = screen.getByRole("button", {name: "Submit"});
        await act(async() => {fireEvent.input(firstName, {
          target: {value: "a"}
        });
        fireEvent.click(
          submitButton
        )})
      const fNameError = screen.getByText("First name must be at least 2 characters");
      expect(fNameError).toBeInTheDocument();
    });

    // Check lname invalidator / display error message
    test("Last Name when the input is one character long", async () => {
      const lastName = screen.getByLabelText("Last Name");
      const submitButton = screen.getByRole("button", {name: "Submit"});
      await act(async() => {fireEvent.input(lastName, {
        target: {value: "a"}
      });
      fireEvent.click(
        submitButton
      )})
    const lNameError = screen.getByText("Last name must be at least 2 characters");
    expect(lNameError).toBeInTheDocument();
    });

    // Check email invalidator / display error message
    test("Email Address when an invalid email is given", async () => {
      const emailAddress = screen.getByLabelText("Email Address");
      const submitButton = screen.getByRole("button", {name: "Submit"});
      await act(async() => {fireEvent.input(emailAddress, {
        target: {value: "a"}
      });
      fireEvent.click(
        submitButton
      )})
    const emailError = screen.getByText("Must enter a valid email address");
    expect(emailError).toBeInTheDocument();
    });

    // Check password invalidator / display error message
    test("Password when an invalid password is given", async () => {
      const password = screen.getByLabelText("Password");
      const submitButton = screen.getByRole("button", {name: "Submit"});
      await act(async() => {fireEvent.input(password, {
        target: {value: "a"}
      });
      fireEvent.click(
        submitButton
      )})
    const pwError = screen.getByText("Password must be at least 8 characters");
    expect(pwError).toBeInTheDocument();
    });

    // Check confirm password invalidator / display error message
    test("Confirm Password when an invalid password is given", async () => {
      const confirmPassword = screen.getByLabelText("Confirm Password");
      const submitButton = screen.getByRole("button", {name: "Submit"});
      await act(async() => {fireEvent.input(confirmPassword, {
        target: {value: "a"}
      });
      fireEvent.click(
        submitButton
      )})
    const pwError = screen.getByText("Passwords must match");
    expect(pwError).toBeInTheDocument();
    });

    // Check phone number invalidator
    test("Phone number when an invalid phone number is give", async () => {
      const phoneNumber = screen.getByLabelText("Phone Number (Optional)");
      const submitButton = screen.getByRole("button", {name: "Submit"});
      await act(async() => {fireEvent.input(phoneNumber, {
        target: {value: "a"}
      });
      fireEvent.click(
        submitButton
      )})
    const phoneError = screen.getByText("Please enter a valid phone number");
    expect(phoneError).toBeInTheDocument();
    });
  }); //end does not validate describe
}); //end LoginForm describe