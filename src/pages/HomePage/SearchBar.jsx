import { useEffect, useState, useRef } from "react";
import { Toast } from "primereact/toast";
import { getRecipes } from "./../../services/spoonacularService";

const SearchBar = ({
  setSearchResult,
  page,
  cuisines,
  isLoading,
  setIsLoading,
}) => {
  console.log("SearchBar render", new Date().toLocaleTimeString());

  const [searchString, setSearchString] = useState("");
  const toast = useRef(null);
  const isFirstLoad = useRef(true);

  const onSubmit = (e) => {
    e.preventDefault();
    searchRecipes();
  };

  const searchRecipes = async () => {
    try {
      setIsLoading(!isLoading);
      const recipes = await getRecipes(searchString, cuisines, page);
      setSearchResult(recipes);
      setIsLoading(false);
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Error during recipe searching",
        detail: error.message,
        life: 3000,
      });
    }
  };

  useEffect(() => {
    console.log("SearchBar, useEffect triggered", { page, cuisines });

    if (isFirstLoad.current) {
      isFirstLoad.current = false;
    } else {
      searchRecipes();
    }
  }, [page, cuisines]);

  return (
    <div className="flex flex-col items-center m-2 gap-2 px-4 ">
      <div className="text-lg font-bubblegum text-lime-600">
        Enter ingredients and we'll find the perfect recipe.
      </div>
      <Toast ref={toast} position="top-right" />
      <form onSubmit={onSubmit} className="flex flex-col md:flex-row  ">
        <input
          id="search-input"
          placeholder="e.g. tomato, basil..."
          className="border-2 border-gray-300 bg-gray-200 m-2 p-2 rounded-full w-80 items-center focus:outline focus:border-lime-500 "
          type="text"
          autoFocus
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <button
          className="bg-gray-400 border-lime-500 border-2 rounded-full m-2 p-2 cursor-pointer hover:bg-lime-500 
          sm:item-centers"
        >
          Search Recipe
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
