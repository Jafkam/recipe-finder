import React from "react";
import Backdrop from "../UI/Backdrop/Backdrop";
import '../../sass/components/_Recipe.scss'

const Recipe = ({ allProps, openModal }) => {

  
  const { strMeal, strMealThumb } = allProps;
  return (
    <>
      <div className="container">
        <p>{strMeal}</p>
        <img src={strMealThumb} alt={strMeal} className="container__image" />
        <button className="container__more-info" onClick={openModal}>
          Recipe
        </button>
      </div>
    </>
  );
};

export default Recipe;
