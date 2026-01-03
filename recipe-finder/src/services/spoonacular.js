const API_HASH = import.meta.env.VITE_SPOONACULAR_API_HASH;
const USERNAME = import.meta.env.VITE_SPOONACULAR_USERNAME;
const BASE_URL = import.meta.env.VITE_SPOONACULAR_BASE_URL;

export async function searchRecipes(query) {
  const res = await fetch(
    `${BASE_URL}?query=${query}&number=12&username=${USERNAME}&hash=${API_HASH}`
  );

  if (!res.ok) {
    throw new Error("Unauthorized request");
  }

  return res.json();
}
