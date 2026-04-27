import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import { ProgressSpinner } from "primereact/progressspinner";

const HomePage = () => {
  console.log("HomePage render", new Date().toLocaleTimeString());
  const [searchResult, setSearchResult] = useState(null);
  const [page, setPage] = useState(1);
  const [cuisines, setCuisines] = useState([]);
  const hasResults = searchResult != null;
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 pt-6 ">
      <div
        className={`flex flex-col items-center ${
          hasResults ? "justify-start py-6" : "justify-center "
        }`}
      >
        <SearchBar
          setSearchResult={setSearchResult}
          page={page}
          cuisines={cuisines}
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
            page={page}
            setPage={setPage}
            cuisines={cuisines}
            setCuisines={setCuisines}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
