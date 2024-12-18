// src/components/RecipeList.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(storedRecipes);
  }, []);

  // Del recipe by ID
  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };

  return (
    <div>
      <h2>My Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet. Start by adding a new recipe!</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <div>
                <Link to={`/recipe/${recipe.id}`}>
                  <button>View Recipe</button>
                </Link>
                <button onClick={() => deleteRecipe(recipe.id)}>🗑️</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
