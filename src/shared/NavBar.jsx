import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const location = useLocation();
  return (
    <nav className="bg-gray-300 flex py-2">
      <div className="flex w-full justify-center items-center px-8 ">
        <Link to="/">
          <img
            src="/recipe.svg"
            alt="Logo"
            className={`${location.pathname === "/" && "hover:bg-gray-400 rounded-full"}  h-20`}
          />
        </Link>
        <div className="text-5xl mx-2 text-gray-800 ">Recipify</div>
      </div>
    </nav>
  );
};
export default NavBar;
