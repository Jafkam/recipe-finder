import React from "react";
import "./Toolbar.css";
import SearchBar from "../../../containers/SearchBar/SearchBar";
import Button from "../../UI/Button/AddRecipeButton";

const Toolbar = ({ filterRecipe, openModal }) => {
  return (
    <>
      <header className={"toolbar"}>
        <div className="header-space">
          <SearchBar recipeSearch={filterRecipe} />
          {/* <div className="title">Recipe app</div> */}
          <Button openModal={openModal} />
        </div>
      </header>
    </>
  );
};

export default Toolbar;
