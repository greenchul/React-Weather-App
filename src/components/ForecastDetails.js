import React from "react";
import propTypes from "prop-types";
import moment from "moment";
import "../styles/ForecastDetails.css";

const ForecastDetails = ({ forecastDetail }) => {
  const { date, temperature, wind, humidity } = forecastDetail;
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-details__max-temp">
        Max Temperature: {temperature.max} &deg;C
      </div>
      <div className="forecast-details__min-temp">
        Min Temperature: {temperature.min} &deg;C
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}%</div>
      <div className="forecast-details__wind">
        Wind: {wind.speed}mph {wind.direction}
      </div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecastDetail: propTypes.shape({
    date: propTypes.number.isRequired,
    temperature: propTypes.shape({
      max: propTypes.number,
      min: propTypes.number,
    }).isRequired,
    wind: propTypes.shape({
      speed: propTypes.number.isRequired,
      direction: propTypes.string.isRequired,
    }),
    humidity: propTypes.number.isRequired,
  }).isRequired,
};
export default ForecastDetails;
