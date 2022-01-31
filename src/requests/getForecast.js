/* eslint-disable  no-unused-vars */
import axios from "axios";

const getForecast = (
  setForecasts,
  setLocation,
  setSelectedDate,
  searchedLocation,
  setErrorMessage
) => {
  const endpoint = `https://mcr-codes-weather-app.herokuapp.com/forecast?city=${searchedLocation}`;
  axios
    .get(endpoint)
    .then((res) => {
      setSelectedDate(res.data.forecasts[0].date);
      setForecasts(res.data.forecasts);
      setLocation(res.data.location);
      setErrorMessage(null);
    })
    .catch((err) => {
      if (err.response.status === 404) {
        setErrorMessage("Please enter a valid city");
      }
      if (err.response.status === 500) {
        setErrorMessage("Server error");
      }
    });
};

export default getForecast;
