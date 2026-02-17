import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { cuisineList } from "./cuisineList";

const SearchResult = ({
  searchResult,
  offset,
  setOffset,
  cuisines,
  setCuisines,
}) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const goPreviousPage = () => {
    setOffset(offset - 5);
    setCurrentPageNumber(currentPageNumber - 1);
  };

  const goNextPage = () => {
    setOffset(offset + 5);
    setCurrentPageNumber(currentPageNumber + 1);
  };

  const onChangeCuisine = (e) => {
    const { value, checked } = e.target;

    setCuisines((prev) => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter((cuisine) => cuisine !== value);
      }
    });
  };

  useEffect(() => {
    setCurrentPageNumber(Math.floor(offset / 5) + 1);
  }, [offset]);

  return (
    <>
      {searchResult && (
        <div>
          <div className="columns-6 my-10 p-6 ">
            {cuisineList.map((cuisine) => (
              <label key={cuisine} className="flex items-center gap-2 mb-2">
                <input
                  type="checkbox"
                  value={cuisine}
                  checked={cuisines.includes(cuisine)}
                  onChange={onChangeCuisine}
                />
                <span>{cuisine}</span>
              </label>
            ))}
          </div>
          <div className=" flex flex-wrap justify-center gap-4">
            {searchResult.results.map((recipe) => (
              <div key={recipe.id} className="w-[230px]">
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
          <div className="m-4 flex justify-center">
            <button
              className="w-24 bg-gray-200 border-gray-300 border-2 rounded-full text-gray-800 cursor-pointer hover:bg-gray-300"
              type="button"
              onClick={goPreviousPage}
              disabled={currentPageNumber === 1}
            >
              Previous
            </button>
            <div className="px-10">
              Current Page:{" "}
              {searchResult.totalResults === 0 ? 1 : currentPageNumber}
            </div>
            <button
              className="w-24 bg-gray-200 border-gray-300 border-2 rounded-full text-gray-800 cursor-pointer hover:bg-gray-300"
              onClick={goNextPage}
              disabled={currentPageNumber > searchResult.totalResults / 5}
            >
              Next
            </button>
            <div className="px-10">
              Total Recipes: {searchResult.totalResults}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchResult;
