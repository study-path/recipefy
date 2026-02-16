import { useState } from "react";
import SearchResult from "./SearchResult";

const SearchBar = () => {
  const [searchString, setSearchString] = useState();
  const [input, setInput] = useState("");

  const searchRecipes = () => {
    setSearchString(input);
  };

  const handleInputKeyDown = (a) => {
    if (a.keyCode == 13) {
      searchRecipes();
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
            className="mx-2 bg-gray-200 border-gray-300 border-2 rounded-full p-2 text-gray-800 cursor-pointer"
            onClick={searchRecipes}
          >
            Search Recipe
          </button>
        </div>
      </div>
      {searchString && <SearchResult searchString={input} />}
    </>
  );
};

export default SearchBar;
