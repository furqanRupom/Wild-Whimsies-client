import { useState } from "react";
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

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative">
      <div>
        <div className="bg-lime-500 text-white flex justify-between px-4  py-1 items-center">
          <div className="flex space-x-2 lg:space-x-4 text-xs font-Raleway font-[500]">
            <p>
              Call us: +1 231 567 910
            </p>
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

        <nav></nav>
      </div>

      <nav className="bg-gray-100 p-2 flex justify-between items-center relative shadow-2xl">
        <div className="lg:flex lg:items-center lg:justify-center lg:space-x-6">
          <img className="h-10 md:h-14 object-cover" src={logo} alt="" />
          <div className="hidden lg:flex space-x-8 items-center mt-2 font-Raleway font-[500]">
            <Link className="hover:underline" to="/">
              Home
            </Link>
            <Link className="hover:underline" to="/">
              All toys
            </Link>
            <Link className="hover:underline" to="/">
              My toys
            </Link>
            <Link className="hover:underline" to="/">
              Add new toys
            </Link>
            <Link className="hover:underline" to="/">
              Blogs
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-lg ">
          <Link>Cart</Link>
          <Link>
            <FaShoppingBag className="text-lime-500" />
          </Link>
          <div>
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={icons}
              alt="logo"
            />
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
              ? "absolute w-full  duration-700 bg-gray-100 z-20"
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
                <Link className="hover:underline" to="/">
                  All toys
                </Link>
              </li>
              <li className="border-b-2 p-3 transition-all">
                {" "}
                <Link className="hover:underline" to="/">
                  My toys
                </Link>
              </li>
              <li className="border-b-2 p-3  transition-all">
                <Link className="hover:underline" to="/">
                  Add new toys
                </Link>
              </li>
              <li className="border-b-2 p-3  transition-all">
                <Link className="hover:underline" to="/">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
