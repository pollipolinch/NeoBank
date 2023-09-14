import ScoringPage from "../pages/ScoringPage";
import { screen } from "@testing-library/react";
import { render } from "../utils/helpers/test";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

describe("Offers Section Test", () => {
  it("show section", () => {
    render(
      <BrowserRouter>
        <ScoringPage />
      </BrowserRouter>
    );
    const selects = screen.getAllByRole("combobox");
    selects.forEach((element) => {
      expect(element).toHaveValue("");
    });
  });
  it("All inputs have id", () => {
    render(
      <BrowserRouter>
        <ScoringPage />
      </BrowserRouter>
    );
    const inputs = screen.getAllByRole("textbox");
    const selects = screen.getAllByRole("combobox");
    inputs.forEach((element) => {
      expect(element).toHaveAttribute("id");
    });
    selects.forEach((element) => {
      expect(element).toHaveAttribute("id");
    });
  });
  it("focus input", () => {
    render(
      <BrowserRouter>
        <ScoringPage />
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText(/For example 100/i);
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });
});
