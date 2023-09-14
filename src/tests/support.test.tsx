import { SupportSection } from "../components/Mainpage/Support/SupportSection";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { request } from "../utils/requests/Request";

describe("Carousel Section Test", () => {
  it("show section", () => {
    render(<SupportSection />);
    expect(screen.getByText(/Newsletter/i)).toBeInTheDocument();
  });
  it("post mail", async () => {
    render(<SupportSection />);
    const mail = "pollifriend@mail.ru";
    const body = JSON.stringify({ mail });
    const url = `http://localhost:8080/email`;
    const { PostMail } = request();
    const result = await PostMail(url, "POST", body);
    expect(result).toEqual(true);
  });
  it("send true email", async () => {
    render(<SupportSection />);
    await screen.findByText("Support");
    expect(screen.queryByTestId("email")).toBeNull();
    fireEvent.change(screen.getByPlaceholderText("Your email"), {
      target: { value: "pollifriend@mail.ru" },
    });
    fireEvent.click(screen.getByTestId("button-subscribe"));
    const mail = "pollifriend@mail.ru";
    const body = JSON.stringify({ mail });
    const url = `http://localhost:8080/email`;
    const { PostMail } = request();
    await PostMail(url, "POST", body);
    await waitFor(() => {
      expect(screen.getByTestId("email")).toBeInTheDocument();
    });
  });
});
