import React from "react";
import Footer from "../components/Footer/Footer";
import RecipeWrap from "../components/RecipeWrap/RecipeWrap";
import Navbar from "../components/Navbar/Navbar";

function Recipe() {
  return (
    <div className="recipe">
      <Navbar />
      <RecipeWrap />
      <Footer />
    </div>
  );
}

export default Recipe;
