import axios from "axios";

const spoonacularKey = "d13a75aee46c4b5782335afb979a6328";
const headers = {
  "Content-Type": "application/json",
  "x-api-key": spoonacularKey,
};
const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";

export async function getRecipes(searchString, offset) {
  const url = `${baseUrl}?number=5&offset=${offset}&query=${encodeURIComponent(searchString)}`;

  return await axios
    .get(url, {
      headers,
    })
    .then((response) => response.data);
}
