import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = data.find((recipe) => recipe.id === parseInt(id));

  return (
    <div className="bg-gray-100 rounded-lg my-10 p-4 shadow-lg hover:shadow-xl">
      <img
        className="rounded-full w-36 h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
        src={recipe.image}
        alt="recipe"
      />
      <p className="font-semibold my-2">{recipe.title}</p>
      <p className="text-gray-600">{recipe.summary}</p>
      <p className="text-gray-600">{recipe.ingredients}</p>
      <p className="text-gray-600">{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
