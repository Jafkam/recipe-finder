import React from "react";
import "./RecipeSummary.css";

const RecipeSummary = ({ recipe }) => {
  let ingredients = [];
  // debugger;
  console.log(recipe);
  for (let [key, value] of Object.entries(recipe)) {
    ingredients.push({ value });
    // console.log(`${key}: ${value}`);
    // console.log(ingredients);
  }
  let list = [];
  for (let ingredient of Object.values(ingredients)) {
  
    if (ingredient.value !== "" || ingredient.value !== null) {
      console.log(ingredient.value);
      list.push(<li>{ingredient.value}</li>);
    }
  }
console.log(list)

  const { strMeal, strMealThumb, strInstructions } = recipe;

  return (
    <div className="recipe-container">
      <div>{strMeal}</div>
      <img src={strMealThumb} alt={strMeal} className="recipe-image" />
      <span> Ingredients</span>
      <ul>
        {list}
        {/* <li>{recipe.strIngredient1}</li>
        <li>{recipe.strIngredient2}</li>
        <li>{recipe.strIngredient3}</li>
        <li>{recipe.strIngredient4}</li>
        <li>{recipe.strIngredient5}</li>
        <li>{recipe.strIngredient6}</li>
        <li>{recipe.strIngredient7}</li>
        <li>{recipe.strIngredient8}</li>
        <li>{recipe.strIngredient9}</li>
        <li>{recipe.strIngredient10}</li>
        <li>{recipe.strIngredient11}</li>
        <li>{recipe.strIngredient12}</li>
        <li>{recipe.strIngredient13}</li>


        <li>{recipe.strIngredient14}</li>
        <li>{recipe.strIngredient15}</li>
        <li>{recipe.strIngredient16}</li> */}
      </ul>
      <span> Instructions</span>
      <div>{strInstructions}</div>
    </div>
  );
};

export default RecipeSummary;
