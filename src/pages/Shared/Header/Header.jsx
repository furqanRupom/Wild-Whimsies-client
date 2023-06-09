import { useContext, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaShoppingBag,
  FaShoppingCart,
  FaShoppingBasket,
  FaBars,
} from "react-icons/fa";
import logo from "../../../assets/logo.png";
import icons from "../../../assets/icons.ico";
import { Link } from "react-router-dom";
import { ToysContext } from "../../../Providers/AuthProviders";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(ToysContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => console.log("logout successfully done"))
      .catch(console.log(error.message));
  };
  return (
    <header className="relative">
      <div>
        <div className="bg-lime-500 text-white flex justify-between px-4  py-1 items-center">
          <div className="flex space-x-2 lg:space-x-4 text-xs  font-[500]">
            <p className="hidden sm:block">Call us: +1 231 567 910</p>
            <p>
              <span>
                Email:<span className="underline">info@wildwhimsies.com</span>
              </span>
            </p>
          </div>

          <div className="flex space-x-3 text-xs md:text-base">
            <FaFacebook />
            <FaInstagram />
            <FaPinterest />
            <FaTwitter />
          </div>
        </div>


      </div>

      <nav className="p-2 flex justify-between items-center relative shadow py-4">
        <div className="lg:flex lg:items-center lg:justify-center lg:space-x-6">
          <img className=" h-6 sm:h-8  md:h-10  object-cover" src={logo} alt="" />
          <div className="hidden lg:flex space-x-8 items-center  font-Raleway font-[500]">
            <Link className="hover:underline" to="/">
              Home
            </Link>
            <Link className="hover:underline" to="/AllToys">
              All toys
            </Link>

            {user ? (
              <>
                <Link className="hover:underline" to="/MyToys">
                  My toys
                </Link>
                <Link className="hover:underline" to="/AddToys">
                  Add new toys
                </Link>
                <Link className="hover:underline" to="/blogs">
                  Blogs
                </Link>
                <button
                  onClick={handleLogOut}
                  className="hover:underline cursor-pointer"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link className="hover:underline" to="/blogs">
                  Blogs
                </Link>
                <Link className="hover:underline" to="/login">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4 text-lg relative">
          <Link className="hidden sm:block">Cart</Link>
          <Link>
            <FaShoppingBag className="text-lime-500" />
          </Link>
          <div className="group ">
            {user && (
              <>
                <img
                  className="w-10 h-10 rounded-full object-cover cursor-pointer"
                  src={user?.photoURL}
                  alt="logo"
                />
                <h3 className="font-Raleway absolute z-50 w-full p-3 rounded bg-white  font-semibold text-lime-500 text-xs left-0 hidden group-hover:block">
                  {user?.displayName}
                </h3>
              </>
            )}
          </div>
          <div className="w-[0.10rem]  h-full absolute right-14 lg:hidden bg-gray-300"></div>
          <button
            onClick={() => setOpen(!open)}
            className="p-4 cursor-pointer lg:hidden"
          >
            <FaBars />
          </button>
        </div>
      </nav>
      <div className="lg:hidden ">
        <div
          className={
            open === true
              ? "absolute w-full -mt-3 duration-700 bg-white z-20"
              : "-translate-y-4"
          }
        >
          <div className={!open && "hidden"}>
            <ul className="flex flex-col text-lg">
              <li className="border-b-2 p-3 border-t-2 transition-all">
                <Link className="hover:underline" to="/">
                  Home
                </Link>
              </li>
              <li className="border-b-2 p-3  transition-all">
                <Link className="hover:underline" to="/AllToys">
                  All toys
                </Link>
              </li>

              {user ? (
                <>
                  <li className="border-b-2 p-3 transition-all">
                    <Link className="hover:underline" to="/MyToys">
                      My toys
                    </Link>
                  </li>
                  <li className="border-b-2 p-3  transition-all">
                    <Link className="hover:underline" to="/AddToys">
                      Add new toys
                    </Link>
                  </li>
                  <li className="border-b-2 p-3  transition-all">
                    <Link className="hover:underline" to="/blogs">
                      Blogs
                    </Link>
                  </li>
                  <li className="border-b-2 p-3  transition-all">
                    <button
                      onClick={handleLogOut}
                      className="hover:underline cursor-pointer"
                    >
                      Log out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="border-b-2 p-3  transition-all">
                    <Link className="hover:underline" to="/blogs">
                      Blogs
                    </Link>
                  </li>
                  <li className="border-b-2 p-3  transition-all">
                    <Link className="hover:underline" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
