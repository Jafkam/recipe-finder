import React, { useState } from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Recipes from "../Recipes/Recipes";
import axios from "../../axios";
import Recipe from "../../components/Recipe/Recipe";
import Modal from "../../components/UI/Modal/Modal";
import RecipeSummary from "../../components/Recipe/RecipeSummary/RecipeSummary";
import AddRecipe from "../Recipes/AddRecipe/AddRecipe";
import "./Layout.css";

class Layout extends React.Component {
  state = {
    defaultRecipes: [],
    updatedRecipes: [],
    sliceRecipes: [],
    word: "",
    error: false,
    showRecipe: false,
    selectedMeal: {},
    empty: false,
  };

  toggleRecipe = (show, recipe, empty) => {
    this.setState({ showRecipe: show, selectedMeal: recipe, empty });
  };

  componentDidMount() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((response) => {
        const allRecipes = response.data.meals;
        const sliceRecipes = allRecipes.slice(0, 4);
        console.log(allRecipes);
        this.setState({
          sliceRecipes: sliceRecipes,
          defaultRecipes: allRecipes,
          // updatedRecipes: allRecipes,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: true });
      });
  }

  filterRecipe = (value) => {
    let valueLowerCase = value.toLowerCase();
    let word = [...this.state.word];
    word = valueLowerCase;
    console.log(word);
    // word = value;
    let oldList = [...this.state.defaultRecipes];
    if (value !== "") {
      oldList = [...oldList];
      let newList = [];
      newList = oldList.filter((recipe) => {
        let strMealLowerCase = recipe.strMeal.toLowerCase();
        return strMealLowerCase.startsWith(word);
      });
      this.setState({ updatedRecipes: newList, word });
    } else {
      this.setState({ updatedRecipes: this.state.sliceRecipes });
    }
  };

  render() {
    let recipeRender =
      this.state.word.length < 1
        ? this.state.sliceRecipes
        : this.state.updatedRecipes;

    let posts = recipeRender.map((post) => {
      // console.log(post);
      // console.log(props);
      return (
        <Recipe
          key={post.idMeal}
          allProps={post}
          show={this.showRecipe}
          openModal={() => this.toggleRecipe(true, post)}
        />
      );
    });
    let modalContent =
      this.state.empty === true ? (
        <AddRecipe />
      ) : (
        <RecipeSummary recipe={this.state.selectedMeal} />
      );
    console.log(Object.keys(this.state.selectedMeal).length );
    console.log(modalContent);

    return (
      <>
        <Toolbar
          recipe={this.state.updatedRecipes}
          filterRecipe={this.filterRecipe}
          openModal={() => this.toggleRecipe(true, {}, true)}
        />
        <Modal
          show={this.state.showRecipe}
          modalClosed={() => this.toggleRecipe(false, {}, false)}
        >
          {modalContent}
        </Modal>
        <div className="boxes">{posts}</div>
      </>
    );
  }
}

export default Layout;
