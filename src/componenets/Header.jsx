import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  return (
    <div className="w-full h-15 p-4 mr-4  bg-gray-500 flex justify-between items-center">
      <img src={LOGO_URL} alt="logo" className="w-14 " />
      <ul className=" flex gap-3  items-center">
        <li className="hover:cursor-pointer hover:text-white"><Link to="/">Home</Link></li>
        <li className="hover:cursor-pointer hover:text-white"><Link to="/about">About us</Link></li>
        <li className="hover:cursor-pointer hover:text-white"><Link to="/contact-us">Contact us</Link></li>
        <li className="hover:cursor-pointer hover:text-white"><Link to="/grocery">Grocery Store</Link></li>
        <li className="hover:cursor-pointer hover:text-white">Cart</li>

        <button
          onClick={() => {
            setIsLoggedIn(isLoggedIn === "Login" ? "LogOut" : "Login");
          }}
          className="w-16 h-8 hover:bg-white hover:cursor-pointer text-black rounded-md"
        >
          {isLoggedIn}
        </button>
      </ul>
    </div>
  );
};

export default Header;
