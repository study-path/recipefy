import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { cuisineList } from "./cuisineList";

const SearchResult = ({
  searchResult,
  page,
  setPage,
  cuisines,
  setCuisines,
}) => {
  console.log("SearchResult render", new Date().toLocaleTimeString());

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

  return (
    <>
      {searchResult && (
        <div className="flex flex-col w-full max-w-6xl mx-auto">
          <div className="flex flex-wrap my-6 px-2 border-2 border-gray-300 rounded-md w-full max-w-6xl  overflow-hidden">
            {cuisineList.map((cuisine, index) => {
              const id = `cuisine-${index}`;
              return (
                <div key={cuisine} className="flex flex-wrap  p-2 ">
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
          <div className="pb-2 text-xl text-gray-600">
            Total Recipes: {searchResult.totalResults}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
            {searchResult.results.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          <div className="m-8 flex justify-center items-center">
            <button
              className="w-36 bg-gray-200 border-lime-500 border-2 rounded-full px-3 text-xl text-lime-600 cursor-pointer hover:bg-gray-300"
              type="button"
              onClick={() => {
                setPage(page - 1);
              }}
              disabled={page === 1}
            >
              <span className="hidden sm:inline">Previous</span>
              <span className="sm:hidden">←</span>
            </button>
            <div className="px-10 text-gray-600">
              Page {page} of {Math.ceil(searchResult.totalResults / 5)}
            </div>
            <button
              className="w-36 bg-gray-200 border-lime-500 border-2 rounded-full px-3 text-xl text-lime-600 cursor-pointer hover:bg-gray-300"
              onClick={() => {
                setPage(page + 1);
              }}
              disabled={page === Math.ceil(searchResult.totalResults / 5)}
            >
              <span className="hidden sm:inline">Next</span>
              <span className="sm:hidden">→</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchResult;
