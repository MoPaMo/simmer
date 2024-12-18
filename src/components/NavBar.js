// src/components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Recipes</Link>
      </li>
      <li>
        <Link to="/add">Add Recipe</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
