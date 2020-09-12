import React from "react";
import "./RecipeSummary.css";

const RecipeSummary = ({ recipe }) => {
  const list = [];

  for (let i = 1; i <= 20; i++) {
    if (recipe["strIngredient" + i]) {
      list.push(
        <li>
          {recipe["strIngredient" + i]} - {recipe["strMeasure" + i]}
        </li>
      );
    } else break;
  }
  console.log(list);

  const { strMeal, strMealThumb, strInstructions } = recipe;

  return (
    <div className="recipe-container">
      <h1>{strMeal}</h1>
      <img src={strMealThumb} alt={strMeal} className="recipe-image" />
      <h2> Instructions</h2>
      <div>{strInstructions}</div>
      <h2> Ingredients</h2>
      <ul>{list}</ul>
    </div>
  );
};

export default RecipeSummary;
