import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

const HomePage = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [offset, setOffset] = useState(-1);
  const [cuisines, setCuisines] = useState([]);
  const hasResults = searchResult != null;

  return (
    <>
      <div
        className={`flex flex-col items-center ${
          hasResults ? "justify-start py-6" : "justify-center h-screen"
        }`}
      >
        <div className="text-6xl m-4 text-gray-800">Recipify</div>
        <SearchBar
          setSearchResult={setSearchResult}
          offset={offset}
          setOffset={setOffset}
          cuisines={cuisines}
          setCuisines={setCuisines}
        />
      </div>
      <SearchResult
        searchResult={searchResult}
        setSearchResult={setSearchResult}
        offset={offset}
        setOffset={setOffset}
        cuisines={cuisines}
        setCuisines={setCuisines}
      />
    </>
  );
};

export default HomePage;
