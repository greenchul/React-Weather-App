import "../styles/App.css";
import React, { useState } from "react";
import propTypes from "prop-types";
import LocationDetails from "./LocationDetails";

import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

const App = ({ forecasts, location }) => {
  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);
  const { city, country } = location;
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <LocationDetails city={city} country={country} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      <ForecastDetails forecastDetail={selectedForecast} />
    </div>
  );
};
App.propTypes = {
  location: propTypes.shape({
    city: propTypes.string.isRequired,
    country: propTypes.string.isRequired,
  }).isRequired,
  forecasts: propTypes.arrayOf(propTypes.shape()).isRequired,
};

export default App;
