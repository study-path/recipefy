import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const location = useLocation();
  return (
    <nav className="bg-gray-300  py-2">
      <div className="w-full max-w-8xl mx-auto flex justify-between items-center px-8 ">
        <Link to="/" className="flex flex-col items-center  ">
          <img
            src="/recipe.svg"
            alt="Logo"
            className="h-20 w-full rounded-full ml-3"
          />
        </Link>
        <div className="px-3 ">
          <Link
            to="/"
            className={`${location.pathname === "/" && "text-orange-900"} mx-3`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${location.pathname === "/about" && "text-orange-900"} mx-3`}
          >
            About
          </Link>
          <Link
            to="/recipes"
            className={`${location.pathname === "/recipes" && "text-orange-900"} mx-3`}
          >
            Recipes
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
