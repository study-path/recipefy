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
        <div className="flex flex-col ">
          <div className="flex flex-wrap  gap-4 my-6 px-2 border-2 border-gray-300 rounded-md">
            {cuisineList.map((cuisine, index) => {
              const id = `cuisine-${index}`;
              return (
                <div key={cuisine} className="flex items-center ">
                  <input
                    id={id}
                    type="checkbox"
                    value={cuisine}
                    checked={cuisines.includes(cuisine)}
                    onChange={onChangeCuisine}
                  />
                  <label htmlFor={id} className=" m-2">
                    {cuisine}
                  </label>
                </div>
              );
            })}
          </div>
          <div className="pb-2 text-xl">
            Total Recipes: {searchResult.totalResults}
          </div>
          <div className="flex flex-wrap justify-between">
            {searchResult.results.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          <div className="m-8 flex justify-center items-center">
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
              disabled={currentPageNumber >= searchResult.totalResults / 5}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchResult;
