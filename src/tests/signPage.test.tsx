import { SignContent } from "../components/SignPage/SignContent";
import { fireEvent, screen } from "@testing-library/react";
import { render } from "../utils/helpers/test";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

describe("Sign Section Test", () => {
  it("show section", () => {
    render(
      <BrowserRouter>
        <SignContent />
      </BrowserRouter>
    );
    expect(screen.getByText(/Send/i)).toBeInTheDocument();
    expect(
      screen.getByText(/professional participant in the securities/i)
    ).toBeInTheDocument();
  });
  it("click checkbox", () => {
    render(
      <BrowserRouter>
        <SignContent />
      </BrowserRouter>
    );
    const checkbox = screen.getByTestId(/checkbox/i);
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
  it("link have href", () => {
    render(
      <BrowserRouter>
        <SignContent />
      </BrowserRouter>
    );
    const link = screen.getByTestId(/document/i);
    expect(link).toHaveAttribute("href");
  });
});
