import { useEffect, useState, useRef } from "react";
import { Toast } from "primereact/toast";
import { getRecipes } from "./../../services/spoonacularService";

const SearchBar = ({ onSearch, offset, setOffset }) => {
  const [searchString, setSearchString] = useState("");
  const toast = useRef(null);

  const onSearchRecipes = async () => {
    setOffset(0);
  };

  const handleInputKeyDown = (a) => {
    setOffset(-1);
    onSearch(null);
    if (a.keyCode == 13) {
      onSearchRecipes();
    }
  };

  const searchRecipes = async () => {
    try {
      const recipes = await getRecipes(searchString, offset);
      onSearch(recipes);
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
    if (offset != -1) {
      searchRecipes();
    }
  }, [offset]);

  return (
    <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center m-2 gap-2 w-full px-4">
      <Toast ref={toast} position="top-right" />
      <div className="flex border-2 border-gray-300 bg-gray-200 m-2 p-2 rounded-full w-full sm:flex-1 sm:max-w-4xl items-center">
        <i className="pi pi-search text-gray-400 text-lg px-2"></i>
        <input
          className="flex-1 min-w-0 mx-2 bg-transparent outline-none text-lg "
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          onKeyDown={handleInputKeyDown}
        />
      </div>
      <div>
        <button
          className="mx-2 bg-gray-200 border-gray-300 border-2 rounded-full p-2 text-gray-800 cursor-pointer hover:bg-gray-300"
          onClick={onSearchRecipes}
        >
          Search Recipe
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
