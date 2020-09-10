import React from "react";
import "./SearchBar.css";

const SearchBar = ({ recipeSearch }) => {
  return (
    <div className='searchBar'>
    <span>Search for your Recipes</span>
      <input
        className="toolbar__comp"
        type="text"
        placeholder="Search me"
        name="search"
        onChange={(event) => recipeSearch(event.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBar;
