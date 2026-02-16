import RecipeCard from "./RecipeCard";
import { getRecipes } from "../../services/spoonacularService";

const SearchResultPage = ({ searchString }) => {
  const recipes = [
    {
      id: 716429,
      title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
      image: "https://img.spoonacular.com/recipes/716429-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 715538,
      title: "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
      image: "https://img.spoonacular.com/recipes/715538-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 716429,
      title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
      image: "https://img.spoonacular.com/recipes/716429-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 715538,
      title: "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
      image: "https://img.spoonacular.com/recipes/715538-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 716429,
      title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
      image: "https://img.spoonacular.com/recipes/716429-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 715538,
      title: "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
      image: "https://img.spoonacular.com/recipes/715538-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 716429,
      title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
      image: "https://img.spoonacular.com/recipes/716429-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 715538,
      title: "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
      image: "https://img.spoonacular.com/recipes/715538-312x231.jpg",
      imageType: "jpg",
    },
  ];
  // let recipesList = getRecipes(searchString);
  let recipesList = getRecipes(recipes);

  return (
    <>
      <div className="flex flex-wrap justify-center ">
        {recipesList.map((recipe) => (
          <div className=" my-2" key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchResultPage;
