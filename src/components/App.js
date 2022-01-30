/* eslint-disable  no-unused-vars */
import "../styles/App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import getForecast from "../requests/getForecast";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const { city, country } = location;

  useEffect(() => {
    getForecast(setForecasts, setLocation, setSelectedDate);
  }, []);

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  return (
    <div className="App">
      <LocationDetails city={city} country={country} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast ? (
        <ForecastDetails forecastDetail={selectedForecast} />
      ) : (
        <div>Select a date</div>
      )}
    </div>
  );
};

export default App;
