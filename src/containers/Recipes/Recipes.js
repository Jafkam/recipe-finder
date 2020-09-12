import React from "react";
import Recipe from "../../components/Recipe/Recipe";
import "./Recipes.css";

const Recipes = ({ props, show, openModal }) => {
  let posts = props.map((post) => {
    return (
      <Recipe
        key={post.idMeal}
        allProps={post}
        show={show}
        openModal={() => openModal(true, post)}
      />
    );
  });

  return { posts };
};

export default Recipes;
