import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import userIcon from "../../assets/image/user-icon.png";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <header className="py-5">
      <nav className="container flex items-center justify-between">
        <div className="w-96">
          <h2 className="text-5xl font-mansalva font-bold text-black">
            <Link to="/">BeyondBorders</Link>
          </h2>
        </div>
        <ul className="flex items-center justify-center menu__container grow">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-black"
              }
            >
              Home
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink
                to="/add-tourists-spot"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-black"
                }
              >
                Add Tourist Spot
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              to="/all-tourists-spot"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-black"
              }
            >
              All Tourist Spots
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink
                to="/tourists-spot/:id"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-black"
                }
              >
                Tourist Spot Details
              </NavLink>
            </li>
          )}
        </ul>
        <div className="w-96 flex items-center justify-end gap-4">
          {user ? (
            <img
              src={user?.photoURL || userIcon}
              alt=""
              className="size-12 rounded-full"
            />
          ) : (
            <Link className="primary__btn" to="/login">
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
