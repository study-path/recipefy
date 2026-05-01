import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const location = useLocation();
  return (
    <nav className="bg-gray-300 flex justify-between sticky top-0 text-6xl ">
      <div className="flex w-full justify-center items-center px-8 ">
        <Link to="/">
          <img
            src="/recipe.svg"
            alt="Logo"
            className={`${location.pathname === "/" && "hover:bg-lime-400 rounded-full"} h-20`}
          />
        </Link>
        <div className=" mx-2 text-gray-800 font-bubblegum">
          Recipi<span className="text-lime-500">fy</span>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
