import { Link } from "react-router";
const RecipeCard = ({ recipe }) => {
  return (
    <div className="flex flex-wrap justify-center ">
      <Link
        to="/recipeDetail"
        key={recipe.id}
        className="flex flex-col m-1 border-2 rounded-md w-[240px] border-gray-300 hover:shadow-xl  "
      >
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-50 object-cover rounded-t-md "
        ></img>
        <div className="text-xl m-2 ">{recipe.title}</div>
      </Link>
    </div>
  );
};

export default RecipeCard;
