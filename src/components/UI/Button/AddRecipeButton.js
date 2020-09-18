import React from "react";
import "../../../sass/components/_AddRecipeButton.scss";
const AddRecipeButton = ({ openModal }) => {
  return (
    <button className="add-recipe" onClick={openModal}>
      Add Recipe
    </button>
  );
};

export default AddRecipeButton;
