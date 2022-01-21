import React from "react";
import propTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

const ForecastSummaries = ({ forecasts }) => {
  return (
    <div>
      <h1>Forecast Summaries</h1>
      {forecasts.map((singleForecast) => {
        return (
          <ForecastSummary
            key={`${singleForecast.temperature.max}`}
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
