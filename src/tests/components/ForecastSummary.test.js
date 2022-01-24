import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("LocationDetails", () => {
  const singleForecast = {
    date: 12122022,
    icon: "1234",
    temperature: {
      max: 23,
      min: 18,
    },
    description: "Cloudy",
  };
  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary singleForecast={singleForecast} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders the correct forecast data and props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary singleForecast={singleForecast} />
    );
    expect(getByText("Description: Cloudy")).toBeTruthy();
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary__icon");
    expect(getByText("Max temp: 23")).toBeTruthy();
    expect(getByText("Description: Cloudy")).toHaveClass(
      "forecast-summary__description"
    );
  });
});
