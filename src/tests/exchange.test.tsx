import { ExchangeSection } from "../components/Mainpage/Exchange/ExchangeSection";
import { screen, waitFor } from "@testing-library/react";
import { render } from "../utils/helpers/test";
import "@testing-library/jest-dom/extend-expect";
import {
  url_exchange,
  api_host_exchange,
  api_key_exchange,
} from "../utils/constants/api";

describe("Exchange Section Test", () => {
  const getExchange = async () => {
    let url = `${url_exchange}from=USD&to=RUB&q=1`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": api_key_exchange,
        "X-RapidAPI-Host": api_host_exchange,
      },
    };
    try {
      await fetch(url, options);
    } catch (error) {
      console.error(error);
    }
  };
  it("show section", () => {
    render(<ExchangeSection />);
    const currency = screen.getByText(/Exchange rate/i);
    expect(currency).toBeInTheDocument();
  });
  it("show news", async () => {
    render(<ExchangeSection />);
    await getExchange();
    await waitFor(() => {
      const currency = screen.getAllByTestId("currency-item");
      currency.forEach((item) => {
        expect(item).toBeInTheDocument();
      });
    });
  });
  it("section have img", () => {
    render(<ExchangeSection />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });
});
