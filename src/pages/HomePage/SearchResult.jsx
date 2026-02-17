import RecipeCard from "./RecipeCard";

const SearchResult = ({ searchResult, offset, setOffset }) => {
  return (
    <>
      {searchResult && (
        <div>
          <div className=" flex flex-wrap justify-center gap-4">
            {searchResult.results.map((recipe) => (
              <div key={recipe.id} className="w-[230px]">
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
          <div className="m-4 flex justify-center">
            <button
              onClick={() => {
                setOffset(offset - 5);
              }}
              disabled={offset - 5 < 0}
            >
              back
            </button>
            <button
              onClick={() => {
                setOffset(offset + 5);
              }}
              disabled={offset + 5 > searchResult.totalResults}
            >
              forward
            </button>
            <div className="px-10">
              Total Pages: {searchResult.totalResults}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchResult;
