import React from 'react'
import './AddRecipeButton.css'
const AddRecipeButton = ({openModal}) => {
    return (
      <button className="add-recipe" onClick={openModal}>
          Add Recipe
      </button>
    )
}

export default AddRecipeButton
