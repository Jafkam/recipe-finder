import React from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import axios from "../../Axios/axios-recipes";
import Recipe from "../../components/Recipe/Recipe";
import Modal from "../../components/UI/Modal/Modal";
import RecipeSummary from "../../components/Recipe/RecipeSummary/RecipeSummary";
import AddRecipe from "../Recipes/AddRecipe/AddRecipe";
import firebase from "../../Axios/axios-post";
import "./Layout.css";

class Layout extends React.Component {
  state = {
    defaultRecipes: [],
    updatedRecipes: [],
    sliceRecipes: [],
    randomMeal: [],
    word: "",
    error: false,
    showRecipe: false,
    selectedMeal: {},
    empty: false,

    newRecipe: {
      strMeal: "",
      strMealThumb: "",
      strIngredient1: "",
      strInstructions: "",
    },
  };

  toggleRecipe = (show, recipe, empty) => {
    this.setState({ showRecipe: show, selectedMeal: recipe, empty });
  };

  componentDidMount() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((response) => {
        const allRecipes = response.data.meals;
        console.log(allRecipes);
        const recipes = {
          recipes: allRecipes,
        };
        console.log(allRecipes);

        const sliceRecipes = allRecipes.slice(0, 4);
        // console.log(allRecipes);
        this.setState({
          sliceRecipes: sliceRecipes,
          defaultRecipes: allRecipes,
          // updatedRecipes: allRecipes,
        });
      });
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        const randomMeal = response.data.meals[0];
        this.setState({ randomMeal });
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
    console.log(this.state.defaultRecipes);
  };

  saveRecipe = (event) => {
    event.preventDefault();
    let oldRecipes = [...this.state.defaultRecipes];
    let newRecipe = this.state.newRecipe;
    // console.log(oldRecipes);

    let newRecipeList = oldRecipes.push(newRecipe);

    console.log(newRecipeList);

    this.setState({ defaultRecipes: newRecipeList, showRecipe: false });
  };

  render() {
    // console.log(this.state.strMeal);
    // console.log(this.state.newRecipe);
    // console.log(this.state.defaultRecipes);
    let recipeRender =
      this.state.word.length < 1
        ? this.state.sliceRecipes
        : this.state.updatedRecipes;

    let posts = recipeRender.map((post) => {
      return (
        <Recipe
          key={post.idMeal}
          allProps={post}
          show={this.showRecipe}
          openModal={() => this.toggleRecipe(true, post)}
        />
      );
    });
    let randomMeal = this.state.randomMeal;
    randomMeal = (
      <Recipe
        allProps={randomMeal}
        show={this.showRecipe}
        openModal={() => this.toggleRecipe(true, this.state.randomMeal)}
      />
    );

    let modalContent =
      this.state.empty === true ? (
        <AddRecipe
          strMeal={(event) => this.setState({ strMeal: event })}
          strMealThumb={(event) => this.setState({ strMealThumb: event })}
          strIngredient1={(event) => this.setState({ strIngredient1: event })}
          strInstructions={(event) => this.setState({ strInstructions: event })}
          saveRecipe={this.saveRecipe}
        />
      ) : (
        <RecipeSummary recipe={this.state.selectedMeal} />
      );

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
        <h3 className="boxes-text">Random Recipe Generator</h3>
        <div className="boxes">{posts}</div>
        <h1>Random Meal</h1>
        <div className="random-meal">{randomMeal}</div>
      </>
    );
  }
}

export default Layout;
