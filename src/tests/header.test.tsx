import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "../components/Header/Header";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  it("render navigarion bar", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const navBar = screen.getAllByRole("navigation");
    navBar.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
  it("Main is a start page", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(global.window.location.pathname).toContain("/");
  });

  it("click on the link", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const user = userEvent.setup();
    await user.click(screen.getByText(/Credit/i));
    expect(global.window.location.pathname).toContain("/loan");
  });
});
