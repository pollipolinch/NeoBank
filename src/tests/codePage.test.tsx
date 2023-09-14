import { CodePage } from "../components/CodePage/CodePage";
import { screen } from "@testing-library/react";
import { render } from "../utils/helpers/test";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

describe("Code Section Test", () => {
  it("show section", () => {
    render(
      <BrowserRouter>
        <CodePage />
      </BrowserRouter>
    );
    const inputNum = screen.getAllByRole("spinbutton");
    inputNum.forEach((ell) => {
      expect(ell).toBeInTheDocument();
    });
  });
  it("letters cannot be entered", async () => {
    render(
      <BrowserRouter>
        <CodePage />
      </BrowserRouter>
    );
    const user = userEvent.setup();
    const inputs = screen.getAllByRole("spinbutton");
    await user.type(inputs[0], "q");
    expect(inputs[0]).toHaveValue(null);
  });
  it("enter numbers", async () => {
    render(
      <BrowserRouter>
        <CodePage />
      </BrowserRouter>
    );
    const user = userEvent.setup();
    const inputs = screen.getAllByRole("spinbutton");
    await user.type(inputs[2], "7");
    expect(inputs[2]).toHaveValue(7);
  });
});
