import { NewsSection } from "../components/Mainpage/News/NewsSection";
import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { url_news } from "../utils/constants/api";
import { News } from "../utils/types/types";

describe("News Section Test", () => {
  const show = async () => {
    try {
      const response = await fetch(url_news);
      const result = await response.json();
      const validArticles = result.articles.filter(
        (item: News) => item.urlToImage !== null && item.description !== null
      );
      return validArticles;
    } catch (error) {
      throw error;
    }
  };
  it("show news", async () => {
    render(<NewsSection />);
    await show();
    await waitFor(() => {
      const news = screen.getAllByTestId("news-item");
      expect(news[0]).toBeInTheDocument();
    });
  });
  it("button clicks", async () => {
    render(<NewsSection />);
    const user = userEvent.setup();
    const buttons = screen.getAllByRole("button");
    expect(buttons[0]).toHaveClass("button_prev_disabled");
    await user.click(buttons[1]);
    expect(buttons[0]).toHaveClass("button_prev");
  });
  it("link have href", async () => {
    render(<NewsSection />);
    await show();
    await waitFor(() => {
      const links = screen.getAllByTestId("news-link");
      links.forEach((link) => {
        expect(link).toHaveAttribute("href");
      });
    });
  });
});
