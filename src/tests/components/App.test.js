import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../components/App";

test("renders correct title", () => {
  const validProps = {
    location: {
      city: "Manchester",
      country: "UK",
    },
    forecasts: [
      {
        date: 1525046400000,
        temperature: {
          max: 11,
          min: 4,
        },
        wind: {
          speed: 13,
          direction: "s",
        },
        humidity: 30,
        description: "Clear",
        icon: "800",
      },
      {
        date: 1525132800000,
        temperature: {
          max: 13,
          min: 8,
        },
        wind: {
          speed: 60,
          direction: "ne",
        },
        humidity: 80,
        description: "Stormy",
        icon: "211",
      },
      {
        date: 1525219200000,
        temperature: {
          max: 1,
          min: -2,
        },
        wind: {
          speed: 5,
          direction: "n",
        },
        humidity: 50,
        description: "Heavy Snow",
        icon: "602",
      },
      {
        date: 1525305600000,
        temperature: {
          max: 20,
          min: 4,
        },
        wind: {
          speed: 150,
          direction: "e",
        },
        humidity: 80,
        description: "Tornado",
        icon: "781",
      },
      {
        date: 1525392000000,
        temperature: {
          max: 25,
          min: 18,
        },
        wind: {
          speed: 8,
          direction: "nne",
        },
        humidity: 50,
        description: "Hazy",
        icon: "721",
      },
    ],
  };

  render(
    <App forecasts={validProps.forecasts} location={validProps.location} />
  );
  const titleElement = screen.getByText(/Weather App/i);

  expect(titleElement).toBeInTheDocument();
});
