import React, { useState, useEffect } from "react";
import style from "./RecipeWrap.module.css";
import RecipeCard from "../RecipeCard/RecipeCard";
import FavoritesButton from "../FavoritesButton/FavoritesButton";

function RecipeWrap() {
  const API_KEY = "3ac44dc53d77462f818831d61468d3b4";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&number=100&diet=vegetarian,vegan&addRecipeInformation=true`
    );
    const data = await response.json();
    //console.log(data.results);
    setRecipes(data.results);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    setQuery(search);
  };

  return (
    <div className={style.recipe_main}>
      <FavoritesButton />
      <div className={style.form}>
        <input
          type="text"
          placeholder="Search your next recipe..."
          value={search}
          onChange={updateSearch}
        />
        <button
          type="button"
          onClick={() => {
            getSearch();
          }}
        >
          Go!
        </button>
      </div>
      <div className={style.recipe_wrap}>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            img={recipe.image}
            time={recipe.readyInMinutes}
            people={recipe.servings}
            summary={recipe.summary}
            source={recipe.sourceUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default RecipeWrap;
