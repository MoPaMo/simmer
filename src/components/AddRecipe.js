// src/components/AddRecipe.js
import React, { useState } from "react";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now(),
      title,
      ingredients,
      instructions,
    };
    const existingRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    existingRecipes.push(newRecipe);
    localStorage.setItem("recipes", JSON.stringify(existingRecipes));

    setTitle("");
    setIngredients("");
    setInstructions("");
    alert("Recipe added successfully!");
  };

  return (
    <div>
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Recipe Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Spaghetti Bolognese"
            required
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="List your ingredients separated by commas."
            required
          />
        </div>
        <div>
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Step-by-step cooking instructions."
            required
          />
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;