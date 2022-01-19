import React from "react";
import propTypes from "prop-types";

function LocationDetails({ city, country }) {
  return <h1>{`${city}, ${country}`}</h1>;
}
LocationDetails.propTypes = {
  city: propTypes.string.isRequired,
  country: propTypes.string.isRequired,
};

export default LocationDetails;
