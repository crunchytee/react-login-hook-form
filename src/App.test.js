import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Show Form", () => {
  render(<App />);
  const linkElement = screen.getByText(/Show Form/i);
  expect(linkElement).toBeInTheDocument();
});
