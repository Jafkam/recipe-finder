import React from "react";
import Backdrop from "../UI/Backdrop/Backdrop";
import "./Recipe.css";

const Recipe = ({ allProps, openModal }) => {

  
  const { strMeal, strMealThumb } = allProps;
  return (
    <>
      <div className="container">
        <p>{strMeal}</p>
        <img src={strMealThumb} alt={strMeal} className="image" />
        <button className="more-info" onClick={openModal}>
          Recipe
        </button>
      </div>
    </>
  );
};

export default Recipe;
