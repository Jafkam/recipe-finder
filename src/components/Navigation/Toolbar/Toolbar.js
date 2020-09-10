import React from "react";
import "./Toolbar.css";
import SearchBar from "../../../containers/SearchBar/SearchBar";
import Button from "../../UI/Button/AddRecipeButton";

const Toolbar = ({ filterRecipe, openModal }) => {
  return (
    <>
      <header className={"toolbar"}>
        <div className="title">Recipe finder</div>
        <SearchBar recipeSearch={filterRecipe} />
        <Button className="toolbar__comp" openModal={openModal} />
      </header>
    </>
  );
};

export default Toolbar;
