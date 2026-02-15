import { useState } from "react";
import SearchResultPage from "./SearchResultPage";

const SearchBar = () => {
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState("");

  const handleSearchRecipe = () => {
    recipes.push(input);
    setRecipes([...recipes], input);
  };

  const handleInputKeyDown = (a) => {
    if (a.keyCode == 13) {
      handleSearchRecipe();
    }
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center m-2 gap-2 w-full px-4">
        <div className="flex border-2 border-gray-300 bg-gray-200 m-2 p-2 rounded-full w-full sm:flex-1 sm:max-w-4xl items-center">
          <i className="pi pi-search text-gray-400 text-lg px-2"></i>
          <input
            className="flex-1 min-w-0 mx-2 bg-transparent outline-none text-lg "
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleInputKeyDown}
          />
        </div>
        <div>
          <button
            className="mx-2 bg-gray-200 border-gray-300 border-2 rounded-md p-2 text-gray-600"
            onClick={handleSearchRecipe}
          >
            Search Recipe
          </button>
        </div>
      </div>
      <SearchResultPage recipes={recipes} />
    </>
  );
};

export default SearchBar;
