import { CodeText } from "../components/CodePage/CodeText";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

describe("Congratulation Section Test", () => {
  it("show section", () => {
    render(
      <BrowserRouter>
        <CodeText />
      </BrowserRouter>
    );
    expect(screen.getByText(/Congratulations!/i)).toBeInTheDocument();
  });
  it("img have alt text", () => {
    render(
      <BrowserRouter>
        <CodeText />
      </BrowserRouter>
    );
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("alt");
  });
  it("click on the button", async () => {
    render(
      <BrowserRouter>
        <CodeText />
      </BrowserRouter>
    );
    const user = userEvent.setup();
    await user.click(screen.getByText(/View/i));
    expect(global.window.location.pathname).toContain("/");
  });
});
