import axios from "axios";

const spoonacularKey = "78fb04f8665647f3aadaf13a159c1807";
const headers = {
  "Content-Type": "application/json",
  "x-api-key": spoonacularKey,
};
const baseUrl = "https://api.spoonacular.com/recipes";

export async function getRecipes(searchString, offset, cuisines) {
  const url = `${baseUrl}/complexSearch?number=5&offset=${offset}&query=${encodeURIComponent(searchString)}&cuisine=${cuisines.join(",")}`;

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
