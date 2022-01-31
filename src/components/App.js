import "../styles/App.css";
import React, { useState, useEffect } from "react";
import getForecast from "../requests/getForecast";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import SearchForm from "./SearchForm";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchedLocation, setSearchedLocation] = useState("Manchester");
  const [errorMessage, setErrorMessage] = useState("");
  const { city, country } = location;

  useEffect(() => {
    getForecast(
      setForecasts,
      setLocation,
      setSelectedDate,
      searchedLocation,
      setErrorMessage
    );
  }, []);

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleSearchSelect = () => {
    console.log(`Searching for value`, searchedLocation);
    getForecast(
      setForecasts,
      setLocation,
      setSelectedDate,
      searchedLocation,
      setErrorMessage
    );
  };
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  return (
    <div className="App">
      <LocationDetails city={city} country={country} />
      <SearchForm
        handleSearchSelect={handleSearchSelect}
        setSearchedLocation={setSearchedLocation}
        errorMessage={errorMessage}
      />
      {selectedForecast ? (
        <ForecastDetails forecastDetail={selectedForecast} />
      ) : (
        <div>Select a date</div>
      )}
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
    </div>
  );
};

export default App;
