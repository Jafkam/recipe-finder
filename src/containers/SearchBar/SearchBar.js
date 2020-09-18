import React from "react";
import "../../sass/components/_SearchBar.scss";
import '../../images/sprite.svg'

const SearchBar = ({ recipeSearch }) => {
  return (
    <div className="search">
      <input
        className="search__bar"
        type="text"
        placeholder="Search me"
        name="search"
        onChange={(event) => recipeSearch(event.currentTarget.value)}
      />
      <button class="search__button">
        <svg class="search__icon">
          <use xlinkHref="../../images/sprite.svg#icon-search"></use>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
