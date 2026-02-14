import { useState } from "react";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState("");

  const handleSearchRecipe = () => {
    recipes.push(input);
    setRecipes([...recipes], input);
  };

  const handleInputKeyDown = (a) => {
    if (a.keyCode == 13) {
      handleSearchRecipe();
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center ">
        <div className="text-6xl mb-4 text-lime-600">Recipify </div>

        <div className="flex border-2 border-lime-300 bg-lime-200 m-2 p-2 rounded-full w-180">
          <i className="pi pi-search text-lime-400 text-lg content-center"></i>
          <input
            className="flex-1  mx-1 "
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleInputKeyDown}
          />
        </div>
        <button
          className="mx-2 bg-lime-200 border-lime-300 border-2 rounded-md p-2 text-lime-600"
          onClick={handleSearchRecipe}
        >
          Search Recipe
        </button>
        <div>
          <ul>
            {recipes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePage;
