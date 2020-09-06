import React, { useState } from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Recipes from "../Recipes/Recipes";
import axios from "../../axios";
import Recipe from "../../components/Recipe/Recipe";
import Modal from "../../components/UI/Modal/Modal";
import RecipeSummary from "../../components/Recipe/RecipeSummary/RecipeSummary";

class Layout extends React.Component {
  state = {
    defaultRecipes: [],
    updatedRecipes: [],
    sliceRecipes: [],
    word: "",
    error: false,
    showRecipe: false,
    selectedMeal: {},
  };

  openRecipeHandler = (show, recipe) => {
    this.setState({ showRecipe: show, selectedMeal: recipe });
  };

  closeRecipeHandler = () => {
    this.setState({ showRecipe: false });
    //toggle modal
    // show true / false
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
    let valueLowerCase = value.toLowerCase()
    let word = [...this.state.word];
    word = valueLowerCase
    console.log(word)
    // word = value;
    let oldList = [...this.state.defaultRecipes];
    if (value !== "") {
      oldList = [...oldList];
      let newList = [];
      newList = oldList.filter((recipe) => {
        let strMealLowerCase = recipe.strMeal.toLowerCase()
       return strMealLowerCase.startsWith(word);
        
        
      });
      this.setState({ updatedRecipes: newList, word });
    } else {
      this.setState({ updatedRecipes: this.state.sliceRecipes });
    }
  };

  render() {
    return (
      <>
        <Toolbar
          recipe={this.state.updatedRecipes}
          filterRecipe={this.filterRecipe}
        />
        <Modal
          show={this.state.showRecipe}
          modalClosed={this.closeRecipeHandler}
        >
          <RecipeSummary recipe={this.state.selectedMeal} />
        </Modal>
        <Recipes
          props={
            this.state.word.length < 1
              ? this.state.sliceRecipes
              : this.state.updatedRecipes
          }
          show={this.showRecipe}
          openModal={() => this.openRecipeHandler(true)}
        />

        {/* {this.state.updatedRecipes} */}
        {/* <Recipes
          recipe={this.state.defaultRecipes}
          filterRecipe={this.state.updatedRecipes}
        /> */}
      </>
    );
  }
}

export default Layout;
