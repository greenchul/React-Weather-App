import "../styles/App.css";
import React from "react";
import propTypes from "prop-types";
import LocationDetails from "./LocationDetails";
// import ForecastSummary from "./ForecastSummary";
import ForecastSummaries from "./ForecastSummaries";

const App = ({ forecast }) => {
  const { city, country } = forecast.location;
  const { forecasts } = forecast;
  return (
    <div className="App">
      <h1>Weather App</h1>
      <LocationDetails city={city} country={country} />
      <ForecastSummaries forecasts={forecasts} />
    </div>
  );
};
App.propTypes = {
  forecast: propTypes.shape({
    location: propTypes.shape({
      city: propTypes.string,
      country: propTypes.string,
    }),
    forecasts: propTypes.arrayOf(propTypes.shape()),
  }).isRequired,
};

export default App;
