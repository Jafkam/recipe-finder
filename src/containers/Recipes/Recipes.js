import React from "react";
import Recipe from "../../components/Recipe/Recipe";
import "./Recipes.css";

const Recipes = ({ props, show, openModal }) => {
  let posts = props.map((post) => {
    // console.log(post);
    // console.log(props);
    return (
      <Recipe
        key={post.idMeal}
        allProps={post}
        show={show}
        openModal={openModal}
      />
    );
  });

  return <div className="boxes">{posts}</div>;
};

export default Recipes;
