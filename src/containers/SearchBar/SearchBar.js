import React from "react";
import "./SearchBar.css";

const SearchBar = ({ recipeSearch }) => {
  return (
    <div className="search-bar-box">
      <input
        className="search-bar"
        type="text"
        placeholder="Search me"
        name="search"
        onChange={(event) => recipeSearch(event.currentTarget.value)}
      />
      <span
        className="iconify"
        data-icon="gg:search"
        data-inline="false"
      ></span>
    </div>
  );
};

export default SearchBar;
