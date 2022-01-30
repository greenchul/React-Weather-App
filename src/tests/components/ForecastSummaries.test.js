import React from "react";
import { render, screen } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      date: 1111111,
      description: "Stub description 1",
      icon: "602",
      temperature: {
        max: 22,
        min: 12,
      },
    },
    {
      date: 2222222,
      description: "Stub description2",
      icon: "800",
      temperature: {
        max: 24,
        min: 13,
      },
    },
  ];
  const onForecastSelect = () => {};

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummaries
        forecasts={validProps}
        onForecastSelect={onForecastSelect}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of ForecastSummary instances", () => {
    render(
      <ForecastSummaries
        forecasts={validProps}
        onForecastSelect={onForecastSelect}
      />
    );
    const forecastSummaryInstances = screen.getAllByTestId("forecast-summary");

    expect(forecastSummaryInstances).toHaveLength(2);
  });
});
