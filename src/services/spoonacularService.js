import axios from "axios";

const spoonacularKey = "cfcdc5248fc04d358f0eb1ff366d3ee6";
const headers = {
  "Content-Type": "application/json",
  "x-api-key": spoonacularKey,
};
const baseUrl = "https://api.spoonacular.com/recipes";

export async function getRecipes(searchString, offset) {
  const url = `${baseUrl}/complexSearch?number=5&offset=${offset}&query=${encodeURIComponent(searchString)}`;

  return await axios
    .get(url, {
      headers,
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
