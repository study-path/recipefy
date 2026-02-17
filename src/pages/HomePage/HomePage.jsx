import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

const HomePage = () => {
  const [results, setResults] = useState(null);
  const [offset, setOffset] = useState(0);
  const hasResults = results != null;

  return (
    <>
      <div
        className={`flex flex-col items-center ${
          hasResults ? "justify-start py-6" : "justify-center h-screen"
        }`}
      >
        <div className="text-6xl m-4 text-gray-800">Recipify</div>
        <SearchBar
          onSearch={setResults}
          offset={offset}
          setOffset={setOffset}
        />
      </div>
      <SearchResult
        searchResult={results}
        offset={offset}
        setOffset={setOffset}
      />
    </>
  );
};

export default HomePage;
