import React from "react";
import propTypes from "prop-types";

const SearchForm = ({ handleSearchSelect, setSearchedLocation }) => {
  return (
    <div className="search-form">
      <input
        className="search-form__input"
        placeholder="City"
        onChange={(e) => {
          setSearchedLocation(e.target.value);
        }}
      />
      <button
        type="button"
        className="search-form__button"
        onClick={() => {
          handleSearchSelect();
        }}
      >
        Search
      </button>
    </div>
  );
};

SearchForm.propTypes = {
  handleSearchSelect: propTypes.func.isRequired,
  setSearchedLocation: propTypes.func.isRequired,
};

export default SearchForm;
