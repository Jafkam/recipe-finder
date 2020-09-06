import React from "react";
import "./Toolbar.css";
import SearchBar from "../../../containers/SearchBar/SearchBar";
import Button from "../../UI/Button/Button";

const Toolbar = ({ recipe, filterRecipe }) => {
  return (
    <header className={"toolbar"}>
      <div className="title">Recipe finder</div>
      <SearchBar onChange={filterRecipe} />
    </header>
  );
};

export default Toolbar;
