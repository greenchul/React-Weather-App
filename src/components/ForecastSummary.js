import React from "react";
import propTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";
import "../styles/ForecastSummary.css";

const ForecastSummary = ({ singleForecast, onSelect }) => {
  const { date, temperature, description, icon } = singleForecast;
  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__grid-container">
        <div className="forecast-summary__grid-1">
          <div className="forecast-summary__date">
            {moment(date).format("ddd Do MMM")}
          </div>
          <div className="forecast-summary__icon" data-testid="forecast-icon">
            <WeatherIcon name="owm" iconId={icon.toString()} />
          </div>
          <div className="forecast-summary__description">{description}</div>
          <button
            type="button"
            className="forecast-summary__button"
            onClick={() => onSelect(date)}
          >
            More details
          </button>
        </div>
        <div className="forecast-summary__grid-2">
          <div className="forecast-summary__temperature">
            {temperature.max} &deg;C
          </div>
        </div>
      </div>
      <hr />
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
    icon: propTypes.number.isRequired,
  }).isRequired,
  onSelect: propTypes.func.isRequired,
};

export default ForecastSummary;
