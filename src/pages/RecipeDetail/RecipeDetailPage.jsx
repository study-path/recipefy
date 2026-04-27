import { useParams, Link } from "react-router";

import { useState, useEffect, useRef } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import { Toast } from "primereact/toast";
import { getRecipeDetails } from "./../../services/spoonacularService";

const RecipeDetailPage = () => {
  const { id } = useParams();
  const toast = useRef(null);
  const [recipeDetail, setRecipeDetail] = useState(null);
  const steps = recipeDetail?.analyzedInstructions?.[0]?.steps ?? [];

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
    <div className="p-4 px-20 ">
      <Toast ref={toast} position="top-right" />
      <Link to="/" className="hover:text-lime-500 py-3 text-lime-600 text-xl">
        ← Back to search
      </Link>
      {recipeDetail ? (
        <div className="py-2">
          <h1 className="my-2 text-6xl text-center font-medium text-gray-800">
            {recipeDetail.title}
          </h1>
          <div className="flex flex-col items-center gap-4 ">
            <div className="flex w-full max-w-5xl gap-4 p-2">
              <div className=" bg-gray-100 shadow-lg/20 rounded-md flex-1  ">
                <h3 className="text-2xl font-medium text-center m-2">
                  Health Information:
                </h3>
                <div className="m-2">
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
              </div>
              <div className="  flex-1">
                <img
                  src={recipeDetail.image}
                  className="h-full w-full object-cover shadow-lg/20 rounded-md"
                />
              </div>
            </div>
            <div className="flex w-full max-w-5xl  gap-4 p-2">
              <div className="flex flex-col flex-1 bg-gray-100 shadow-lg/20 rounded-md">
                <h3 className="text-2xl font-medium text-center m-2">
                  Ingredients
                </h3>
                <ul className="p-2">
                  {recipeDetail.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>
                      <div className="flex m-2">{ingredient.original}</div>
                    </li>
                  ))}
                </ul>
              </div>
              {steps.length > 0 && (
                <div className="flex flex-col flex-1 bg-gray-100 shadow-lg/20 rounded-md">
                  <h3 className="text-2xl font-medium text-center m-3">
                    Cooking instructions
                  </h3>
                  <div className="p-2">
                    {steps.map((item) => (
                      <div key={item.number} className="mb-4">
                        <div>
                          {item.number}. {item.step}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center ">
          <ProgressSpinner />
        </div>
      )}
    </div>
  );
};
export default RecipeDetailPage;
