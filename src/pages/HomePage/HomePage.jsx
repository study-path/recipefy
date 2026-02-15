import SearchBar from "./SearchBar";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center border-red-500 border-2 ">
        <div className="text-6xl m-4 text-lime-600">Recipify </div>
        <SearchBar />
      </div>
    </>
  );
};

export default HomePage;
