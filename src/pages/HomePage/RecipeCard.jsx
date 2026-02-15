import { Link } from "react-router";
const RecipeCard = () => {
  const recipes = [
    {
      id: 716429,
      title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
      image: "https://img.spoonacular.com/recipes/716429-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 715538,
      title: "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
      image: "https://img.spoonacular.com/recipes/715538-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 716429,
      title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
      image: "https://img.spoonacular.com/recipes/716429-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 715538,
      title: "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
      image: "https://img.spoonacular.com/recipes/715538-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 716429,
      title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
      image: "https://img.spoonacular.com/recipes/716429-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 715538,
      title: "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
      image: "https://img.spoonacular.com/recipes/715538-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 716429,
      title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
      image: "https://img.spoonacular.com/recipes/716429-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 715538,
      title: "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
      image: "https://img.spoonacular.com/recipes/715538-312x231.jpg",
      imageType: "jpg",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center ">
      {recipes.map((item) => (
        <Link
          key={item.id}
          className="flex flex-col m-1 border-2 rounded-md w-[240px] border-gray-300 hover:shadow-xl  "
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-50 object-cover rounded-t-md "
          ></img>
          <div className="text-xl m-2 ">{item.title}</div>
        </Link>
      ))}
    </div>
  );
};
export default RecipeCard;
