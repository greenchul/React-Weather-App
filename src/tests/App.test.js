import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders learn react link", () => {
  render(
    <App
      forecast={{
        location: { city: "Manchester", country: "UK" },
        forecasts: [],
      }}
    />
  );
  const linkElement = screen.getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});
