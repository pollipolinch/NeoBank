import { CarouselSection } from "../components/Loanpage/Caurousel/CarouselSection";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Carousel Section Test", () => {
  it("Carousel Section Navigation", () => {
    render(<CarouselSection />);
    const aboutButton = screen.getByText(/About/i);
    const ratesButton = screen.getByText(/Rates/i);
    const cashbackButton = screen.getByText(/Cashback/i);
    const faqButton = screen.getByText(/FAQ/i);

    fireEvent.click(ratesButton);
    const ratesSection = screen.getByTestId(/rates-section/i);
    expect(ratesSection).toBeInTheDocument();

    fireEvent.click(cashbackButton);
    const cashbackSection = screen.getByTestId(/cashback-section/i);
    expect(cashbackSection).toBeInTheDocument();

    fireEvent.click(faqButton);
    const faqSection = screen.getByTestId(/faq-section/i);
    expect(faqSection).toBeInTheDocument();

    fireEvent.click(aboutButton);
    const aboutSection = screen.getByTestId(/about-section/i);
    expect(aboutSection).toBeInTheDocument();
  });
  it("open accordion", () => {
    render(<CarouselSection />);
    const faqButton = screen.getByText(/FAQ/i);
    fireEvent.click(faqButton);
    fireEvent.click(screen.getByText(/How to get/i));
    expect(screen.getByText(/We will deliver/i)).toBeInTheDocument();
  });
  it("img have alt text", () => {
    render(<CarouselSection />);
    const images = screen.getAllByRole("img");
    images.forEach((ell) => {
      expect(ell).toHaveAttribute("alt");
    });
  });
});
