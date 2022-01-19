import "../styles/App.css";
import React from "react";
import propTypes from "prop-types";
import LocationDetails from "./LocationDetails";

function App({ forecast }) {
  const { city, country } = forecast.location;
  return (
    <div className="App">
      <h1>Weather App</h1>
      <LocationDetails city={city} country={country} />
    </div>
  );
}
App.propTypes = {
  forecast: propTypes.shape({
    location: propTypes.shape({
      city: propTypes.string,
      country: propTypes.string,
    }),
  }).isRequired,
};

export default App;
