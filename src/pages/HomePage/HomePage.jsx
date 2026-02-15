import SearchBar from "./SearchBar";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col items-center ">
        <div className="text-6xl m-4 text-gray-600">Recipify </div>
        <SearchBar />
      </div>
    </>
  );
};

export default HomePage;
