import { Link } from "react-router";
const RecipeCard = ({ recipe }) => {
  return (
    <div className="border-2 border-gray-300 w-[18%] hover:shadow-xl rounded-md m-2 overflow-clip">
      <Link to={`/recipeDetail/${recipe.id}`} key={recipe.id}>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-40 w-full object-cover"
        ></img>
        <div className="text-xl m-2 ">{recipe.title}</div>
      </Link>
    </div>
  );
};

export default RecipeCard;
