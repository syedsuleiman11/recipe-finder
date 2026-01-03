import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import { searchRecipes } from "../services/spoonacular";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    console.log("handleSearch called:", query);
    const data = await searchRecipes(query);
    console.log("API response:", data);
    setRecipes(data.results || []);
  };

  const saveRecipe = (recipe) => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    localStorage.setItem(
      "favorites",
      JSON.stringify([...saved, recipe])
    );
  };

  return (
    <div className="p-6">
      <SearchBar onSearch={handleSearch} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {recipes.map((r) => (
          <RecipeCard key={r.id} recipe={r} onSave={saveRecipe} />
        ))}
      </div>
    </div>
  );
}
