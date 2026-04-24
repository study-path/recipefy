import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import { ProgressSpinner } from "primereact/progressspinner";

const HomePage = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [offset, setOffset] = useState(-1);
  const [cuisines, setCuisines] = useState([]);
  const hasResults = searchResult != null;
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="flex flex-col items-center gap-6 pt-6 border-3 border-blue-700">
      <div
        className={`flex flex-col items-center  border-3 border-red-600 ${
          hasResults ? "justify-start py-6" : "justify-center "
        }`}
      >
        <SearchBar
          setSearchResult={setSearchResult}
          offset={offset}
          setOffset={setOffset}
          cuisines={cuisines}
          setCuisines={setCuisines}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </div>
      <div className="flex justify-center items-center  ">
        {isLoading ? (
          <div className="flex  ">
            <ProgressSpinner />
          </div>
        ) : (
          <SearchResult
            searchResult={searchResult}
            setSearchResult={setSearchResult}
            offset={offset}
            setOffset={setOffset}
            cuisines={cuisines}
            setCuisines={setCuisines}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
