// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipe from "./components/AddRecipe";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Simmer Recipe Manager</h1>
        <NavBar />
        <Switch>
          <Route exact path="/" component={RecipeList} />
          <Route path="/add" component={AddRecipe} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
