import React from "react";
import propTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";

const ForecastSummary = ({ singleForecast }) => {
  const { date, temperature, description, icon } = singleForecast;
  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">
        Date: {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-summary__temperature">
        Temp: {temperature.max}
      </div>
      <div className="forecast-summary__description">
        Description: {description}
      </div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
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
