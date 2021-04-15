import React, { useState, useEffect } from "react";
import style from "./RecipeWrap.module.css";
import RecipeCard from "../RecipeCard/RecipeCard";
import FavoritesButton from "../FavoritesButton/FavoritesButton";

function RecipeWrap() {
  const API_KEY = "3ac44dc53d77462f818831d61468d3b4";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=95&tags=vegetarian,vegan`
    );
    const data = await response.json();
    //console.log(data.recipes);
    setRecipes(data.recipes);
  };

  return (
    <div className={style.recipe_main}>
      <FavoritesButton />
      <div className={style.recipe_wrap}>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            img={recipe.image}
            time={recipe.readyInMinutes}
            people={recipe.servings}
            instructions={recipe.instructions}
            source={recipe.sourceUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default RecipeWrap;
