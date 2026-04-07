import { useParams } from "react-router";
import { useState, useEffect, useRef } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import { Toast } from "primereact/toast";
import { getRecipeDetails } from "./../../services/spoonacularService";

const RecipeDetailPage = () => {
  const { id } = useParams();
  const toast = useRef(null);
  const [recipeDetail, setRecipeDetail] = useState(null);

  const getHealthInfo = (isCheck) => {
    return (
      <>
        {isCheck ? (
          <i className="pi pi-check text-green-400"></i>
        ) : (
          <i className="pi pi-check text-red-400"></i>
        )}
      </>
    );
  };

  useEffect(() => {
    const load = async () => {
      try {
        const result = await getRecipeDetails(id);
        setRecipeDetail(result);
      } catch (error) {
        toast.current.show({
          severity: "error",
          summary: "Error during fetching recipe details",
          detail: error.message,
          life: 3000,
        });
      }
    };

    load();
  }, []);

  return (
    <div className="p-4 h-screen border-3 border-green-500 px-20 ">
      <Toast ref={toast} position="top-right" />
      {recipeDetail ? (
        <div>
          <div className="flex gap-4 p-4 ">
            <div className="flex-1">
              <h1 className="my-2 text-4xl text-gray-800">
                {recipeDetail.title}
              </h1>
              <div className="my-3">
                <h3 className="text-2xl">Health Information:</h3>
                <div className="flex">
                  <span className="mr-4 w-[110px]">Dairy Free:</span>
                  {getHealthInfo(recipeDetail.dairyFree)}
                </div>
                <div className="flex">
                  <span className="mr-4 w-[110px]">Gluten Free: </span>
                  {getHealthInfo(recipeDetail.glutenFree)}
                </div>
                <div className="flex">
                  <span className="mr-4 w-[110px]">Ketegonic:</span>
                  {getHealthInfo(recipeDetail.ketogenic)}
                </div>
                <div className="flex">
                  <span className="mr-4 w-[110px]">Vegan:</span>
                  {getHealthInfo(recipeDetail.vegan)}
                </div>
                <div className="flex">
                  <span className="mr-4 w-[110px]">Vegetarian:</span>
                  {getHealthInfo(recipeDetail.vegetarian)}
                </div>
                <div className="flex">
                  <span className="mr-4 w-[110px]">Whole 30:</span>
                  {getHealthInfo(recipeDetail.whole30)}
                </div>
                <div className="flex">
                  <span className="mr-4 w-[110px]">Very Healthy:</span>
                  {getHealthInfo(recipeDetail.veryHealthy)}
                </div>
              </div>
              <div className="my-4 text-lg">
                {recipeDetail.readyInMinutes && (
                  <div>
                    <i className="pi pi-clock"></i>
                    <span className="px-3">
                      ready in {recipeDetail.readyInMinutes} min
                    </span>
                  </div>
                )}
                <div>
                  <i className="pi pi-users"></i>
                  <span className="px-3">for {recipeDetail.servings}</span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img src={recipeDetail.image} />
            </div>
          </div>
          <div className="flex gap-4 p-4">
            <div className="flex-1 ">
              <h3 className="text-2xl text-gray-800 text-center">
                Ingredients
              </h3>
              <ul className="p-2">
                {recipeDetail.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.original}</li>
                ))}
              </ul>
            </div>
            {recipeDetail.instructions !== "" && (
              <div className="flex-1 ">
                <h3 className="text-2xl text-gray-800 text-center">
                  Cooking instructions
                </h3>
                <div className="p-2">{recipeDetail.instructions}</div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <ProgressSpinner />
        </div>
      )}
    </div>
  );
};
export default RecipeDetailPage;
