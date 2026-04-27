import axios from "axios";

const spoonacularKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
console.log("Spoonacular API Key:", spoonacularKey);

const headers = {
  "Content-Type": "application/json",
  "x-api-key": spoonacularKey,
};
const baseUrl = "https://api.spoonacular.com/recipes";

export async function getRecipes(searchString, cuisines, page) {
  let offset = (page - 1) * 5;
  const url = `${baseUrl}/complexSearch?`;

  return await axios
    .get(url, {
      headers,
      params: {
        number: 5,
        offset,
        query: searchString,
        cuisine: Array.isArray(cuisines) ? cuisines.join(",") : cuisines,
      },
    })
    .then((response) => response.data);
}

export async function getRecipeDetails(id) {
  const url = `${baseUrl}/${id}/information`;

  return await axios
    .get(url, {
      headers,
    })
    .then((response) => response.data);
}
