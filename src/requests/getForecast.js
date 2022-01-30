/* eslint-disable  no-unused-vars */
import axios from "axios";

const getForecast = (setForecasts, setLocation, setSelectedDate) => {
  const endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";
  axios.get(endpoint).then((res) => {
    setSelectedDate(res.data.forecasts[0].date);
    setForecasts(res.data.forecasts);
    setLocation(res.data.location);
  });
};

export default getForecast;
