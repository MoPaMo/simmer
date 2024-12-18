// src/components/RecipeList.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RecipeList.css"; 

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(storedRecipes);
  }, []);

  // Del recipe by ID
  const deleteRecipe = (id) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      const updatedRecipes = recipes.filter((recipe) => recipe.id !== id);
      setRecipes(updatedRecipes);
      localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    }
  };

  return (
    <div className="recipe-list-container">
      <h2>My Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet. Start by adding a new recipe!</p>
      ) : (
        <ul className="recipe-list">
          {recipes.map((recipe) => (
            <li key={recipe.id} className="recipe-item">
              <Link to={`/recipe/${recipe.id}`} className="recipe-link">
                <h3>{recipe.title}</h3>
              </Link>
              <button
                className="delete-button"
                onClick={() => deleteRecipe(recipe.id)}
                title="Delete Recipe"
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
