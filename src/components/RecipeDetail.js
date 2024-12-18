simmer / src / components / RecipeDetail.js;
// src/components/RecipeDetail.js
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    const foundRecipe = storedRecipes.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div>
        <h2>Recipe Not Found</h2>
        <Link to="/">
          <button>Back to Recipes</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <h3>Ingredients:</h3>
      <p>{recipe.ingredients}</p>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
      <Link to="/">
        <button>Back to Recipes</button>
      </Link>
    </div>
  );
};

export default RecipeDetail;
