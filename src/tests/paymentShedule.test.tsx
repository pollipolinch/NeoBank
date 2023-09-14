import PaymentPage from "../pages/PaymentPage";
import { fireEvent, screen } from "@testing-library/react";
import { render } from "../utils/helpers/test";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

describe("PaymentShedule Section Test", () => {
  it("show table", () => {
    render(
      <BrowserRouter>
        <PaymentPage />
      </BrowserRouter>
    );
    expect(screen.getByRole("table")).toBeInTheDocument();
  });
  it("click checkbox", () => {
    render(
      <BrowserRouter>
        <PaymentPage />
      </BrowserRouter>
    );
    const checkbox = screen.getByTestId(/checkbox/i);
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
  it("Open modal", async () => {
    render(
      <BrowserRouter>
        <PaymentPage />
      </BrowserRouter>
    );
    const user = userEvent.setup();
    await user.click(screen.getByTestId(/deny/i));
    expect(await screen.findByText(/You exactly sure/i)).toBeInTheDocument();
  });
});
