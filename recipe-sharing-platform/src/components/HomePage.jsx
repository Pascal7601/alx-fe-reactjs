import { useEffect, useState } from "react";
import data from "../data.json";
function HomePage() {
  const [recipes, setRecipes] = useState("");

  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 md:gap-8 md:w-50">
      <h1 className="text-blue-500 text-center">RECIPES</h1>
      {data.map((recipe) => {
        return (
          <div className="bg-gray-100 rounded-lg my-10 p-4 shadow-lg hover:shadow-xl">
            <img
              className="rounded-full w-36 h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
              src={recipe.image}
              alt="recipe"
            />
            <p className="font-semibold my-2">{recipe.title}</p>
            <p className="text-gray-600">{recipe.summary}</p>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
