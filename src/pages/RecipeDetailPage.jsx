import { recipeDetail } from "../detailRecipeData";

const RecipeDetailPage = () => {
  const ingredients = recipeDetail.extendedIngredients.map((i) => i.original);
  console.log(ingredients);
  return (
    <div className="p-4 h-screen">
      <div className="flex gap-4 p-4">
        <div className="flex-1">
          <div className="my-2 text-3xl text-gray-800">
            {recipeDetail.title}
          </div>
          <div className="my-2">
            <h3>Health Information:</h3>
            <div>{recipeDetail.dairyFree}sdfds</div>
            <div>{recipeDetail.glutenFree}</div>
            <div>{recipeDetail.ketogenic}sdfdsf</div>
            <div>{recipeDetail.lowFodmap}</div>
            <div>{recipeDetail.vegan}</div>
            <div>{recipeDetail.vegetarian}xdfdxsf</div>
            <div>{recipeDetail.whole30}</div>
            <div>{recipeDetail.veryHealthy}</div>
          </div>
          <div className="">
            <i className="pi pi-clock  text-xl "></i>
            <span className="px-2">
              {recipeDetail.preparationMinutes} min prep
            </span>
          </div>
          <div className="">
            <i className="pi pi-users  text-xl "></i>
            <span className="px-2">{recipeDetail.servings} servings</span>
          </div>
        </div>
        <div className="flex-1">
          <img src={recipeDetail.image} />
        </div>
      </div>
      <div className="flex gap-4 p-4">
        <div className="flex-1 border-2 border-gray-300 rounded-md">
          <h3 className="text-2xl text-gray-800 text-center">Ingredients</h3>
          <ul className="p-2">
            {ingredients.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1 ">
          <h3 className="text-2xl text-gray-800 text-center ">
            Cooking instructions
          </h3>
          <div className="p-2">{recipeDetail.instructions}xzcfvxdfv</div>
        </div>
      </div>
    </div>
  );
};
export default RecipeDetailPage;
