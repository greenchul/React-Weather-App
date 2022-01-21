import React from "react";
import propTypes from "prop-types";

const ForecastSummary = ({ singleForecast }) => {
  const { date, temperature, description, icon } = singleForecast;
  return (
    <div className="forecast-summary">
      <h2>This is the forecast summary!</h2>
      <div className="forecast-summary__date"> Date: {date} </div>
      <div className="forecast-summary__temperature">
        Max temp: {temperature.max}
      </div>
      <div className="forecast-summary__description">
        Description: {description}
      </div>
      <div className="forecast-summary__icon"> Icon: {icon} </div>
    </div>
  );
};

ForecastSummary.propTypes = {
  singleForecast: propTypes.shape({
    date: propTypes.number.isRequired,
    temperature: propTypes.shape({
      max: propTypes.number,
      min: propTypes.number,
    }).isRequired,
    description: propTypes.string.isRequired,
    icon: propTypes.string.isRequired,
  }).isRequired,
};

export default ForecastSummary;
