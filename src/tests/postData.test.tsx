import { GetCardSection } from "../components/Loanpage/GetCard/GetCardSection";
import { screen } from "@testing-library/react";
import { render } from "../utils/helpers/test";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

describe("PostData Section Test", () => {
  it("show section", () => {
    render(<GetCardSection />);
    expect(screen.getByText(/Continue/i)).toBeInTheDocument();
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });
  it("inputs have id", () => {
    render(<GetCardSection />);
    const inputs = screen.getAllByRole("textbox");
    inputs.forEach((ell) => {
      expect(ell).toHaveAttribute("id");
    });
  });

  it("form validation", async () => {
    render(<GetCardSection />);
    const user = userEvent.setup();
    const emailInput = screen.getByLabelText(/Your email/i);
    await user.type(emailInput, "test@mail.ru");
    await user.click(screen.getByText(/Continue/i));
    expect(emailInput).toHaveClass("getCard__select_input");
  });
  it("data input", async () => {
    render(<GetCardSection />);
    const user = userEvent.setup();
    const firstNameInput = screen.getByLabelText(/Your first/i);
    await user.type(firstNameInput, "Polina");
    expect(firstNameInput).toHaveValue("Polina");
  });
});
