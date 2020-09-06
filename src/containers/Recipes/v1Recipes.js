import React, { useState } from "react";
import Recipe from "../../components/Recipe/Recipe";
import "./Recipes.css";
import Modal from "../../components/UI/Modal/Modal";
import RecipeSummary from "../../components/Recipe/RecipeSummary/RecipeSummary";

const Recipes = ({ recipe, filterRecipe }) => {
  const [showRecipe, setRecipe] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState({});

  const openRecipeHandler = (show, recipe) => {
    setRecipe(show);
    setSelectedMeal(recipe);
  };

  const closeRecipeHandler = () => {
    //toggle modal
    setRecipe(false); // show true / false
  };

  // const thePost = () => {
    let posts = filterRecipe.map(post => {
      console.log(post.filterRecipe)
      return (
              <Recipe
                allProps={filterRecipe}
                show={showRecipe}
                openModal={() => openRecipeHandler(true, filterRecipe)}
              />
            );
    })
    // console.log(filterRecipe)
    // posts = recipe.map((post, postIndex) => {
    //   if (filterRecipe.strMeal === post.strMeal) {
    //     console.log("Should return one recipe");
    //     return (
    //       <Recipe
    //         allProps={filterRecipe}
    //         show={showRecipe}
    //         openModal={() => openRecipeHandler(true, filterRecipe)}
    //       />
    //     );
    //   }

      // else {
      //   console.log(`I shouldn't be here`);
      //   return (
      //     <Recipe
      //       key={post.idMeal}
      //       allProps={post}
      //       show={showRecipe}
      //       openModal={() => openRecipeHandler(true, post)}
      //     />
      //   );
      // }
    // });
    // if (filterRecipe.strMeal !== recipe.strMeal ) {
    //   return posts = <p>Post does not exist</p>
    // }
    // return posts;
  // };

  return (
    <div className="boxes">
      <Modal show={showRecipe} modalClosed={closeRecipeHandler}>
        <RecipeSummary recipe={selectedMeal} />
      </Modal>
      {posts}
    </div>
  );
};

export default Recipes;
