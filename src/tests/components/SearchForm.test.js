import React from "react";
import { render, screen } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm component", () => {
  const validProps = {
    handleSearchSelect: () => {},
    setSearchedLocation: () => {},
  };
  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        handleSearchSelect={validProps.handleSearchSelect}
        setSearchedLocation={validProps.setSearchedLocation}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("button renders correctly", () => {
    render(
      <SearchForm
        handleSearchSelect={validProps.handleSearchSelect}
        setSearchedLocation={validProps.setSearchedLocation}
      />
    );
    const buttonElement = screen.getByText("Search");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("search-form__button");
  });

  it("input renders correctly", () => {
    render(
      <SearchForm
        handleSearchSelect={validProps.handleSearchSelect}
        setSearchedLocation={validProps.setSearchedLocation}
      />
    );
    const inputElement = screen.getByPlaceholderText("City");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass("search-form__input");
  });
});
