import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("LocationDetails", () => {
  it("renders the correct forecast data and props", () => {
    const singleForecast = {
      date: 12122022,
      icon: "1234",
      temperature: {
        max: 23,
        min: 18,
      },
      description: "Cloudy",
    };
    const { getByText } = render(
      <ForecastSummary singleForecast={singleForecast} />
    );
    expect(getByText("Description: Cloudy")).toBeTruthy();
    expect(getByText("Max temp: 23")).toBeTruthy();
    // expect(getByText("1234")).toHaveClass("forecast-summary__date");
    // expect(getByText("Cloudy")).toHaveClass("forecast-summary__description");
  });
});
