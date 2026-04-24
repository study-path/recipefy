import { Link } from "react-router";
const RecipeCard = ({ recipe }) => {
  return (
    <div className="shadow-lg/20 w-[18%] hover:shadow-xl rounded-md m-2 overflow-clip group hover:text-orange-300 ">
      <Link to={`/recipeDetail/${recipe.id}`} key={recipe.id}>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-40 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        ></img>
        <div className="text-lg m-2 ">{recipe.title}</div>
      </Link>
    </div>
  );
};

export default RecipeCard;
