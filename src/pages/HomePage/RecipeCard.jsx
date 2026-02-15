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
  ];
  return (
    <div className=" border-2 border-black">
      <ul>
        {recipes.map((item) => (
          <li
            key={item.id}
            className="flex flex-col p-2 border-2 border-green-300"
          >
            <div>{item.title}</div>
            <img src={item.image}></img>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RecipeCard;
