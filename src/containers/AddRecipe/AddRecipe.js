import React from "react";
import '../../sass/components/_AddRecipe.scss'

const AddRecipe = ({
  strMeal,
  strIngredient1,
  strInstructions,
  strMealThumb,
  saveRecipe,
}) => {
  return (
    <form className="form">
      Please add details for new recipe below
      <input
        className={"form__item-text"}
        type="text"
        name="title"
        placeholder="Recipe name"
        onChange={(event) => strMeal(event.currentTarget.value)}
      />
      <textarea
        className={"form__item-textarea"}
        type="textarea"
        name="Ingredients"
        placeholder="Ingredients"
        onChange={(event) => strIngredient1(event.currentTarget.value)}
      />
      <textarea
        className={"form__item-text"}
        type="text"
        name="Instructions"
        placeholder="Instructions"
        onChange={(event) => strInstructions(event.currentTarget.value)}
      />
      <input
        className={"form__item-text"}
        type="text"
        name="Image"
        placeholder="Image URL (Optional)"
        onChange={(event) => strMealThumb(event.currentTarget.value)}
      />
      <button onClick={saveRecipe} className='form__button'>Add Recipe</button>
    </form>
  );
};

export default AddRecipe;
