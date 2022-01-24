import React from "react";
import propTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastSummaries.css";

const ForecastSummaries = ({ forecasts }) => {
  return (
    <div className="forecast-summaries">
      {forecasts.map((singleForecast) => {
        return (
          <ForecastSummary
            key={`${singleForecast.date}`}
            singleForecast={singleForecast}
          />
        );
      })}
    </div>
  );
};

ForecastSummaries.propTypes = {
  forecasts: propTypes.arrayOf(propTypes.shape()).isRequired,
};
// eslint-disable-next-line react/require-default-props

export default ForecastSummaries;
