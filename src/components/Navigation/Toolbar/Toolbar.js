import React from "react";
import '../../../sass/components/_Toolbar.scss';
import SearchBar from "../../../containers/SearchBar/SearchBar";
import Button from "../../UI/Button/AddRecipeButton";

const Toolbar = ({ filterRecipe, openModal }) => {
  return (
    <>
      <header className="toolbar">
        <div className="toolbar__header-space">
          <SearchBar recipeSearch={filterRecipe} />
          
          <Button openModal={openModal} />
        </div>
      </header>
    </>
  );
};

export default Toolbar;
