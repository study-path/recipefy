import { Link } from "react-router";
const RecipeCard = ({ recipe }) => {
  return (
    <div className="shadow-lg/20   hover:shadow-xl rounded-md  overflow-clip group hover:text-orange-300  ">
      <Link to={`/recipeDetail/${recipe.id}`} key={recipe.id}>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="sm:h-40 h-64 w-full max-w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        ></img>
        <div className="text-lg m-2 ">{recipe.title}</div>
      </Link>
    </div>
  );
};

export default RecipeCard;
