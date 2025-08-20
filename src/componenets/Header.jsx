import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  return (
    <div className="header">
      <img src={LOGO_URL} alt="" />
      <ul className="nav-items">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/contact-us">Contact us</Link></li>
        <li><Link to="/grocery">Grocery Store</Link></li>
        <li>Cart</li>

        <button
          onClick={() => {
            setIsLoggedIn(isLoggedIn === "Login" ? "LogOut" : "Login");
          }}
          className="login-btn"
        >
          {isLoggedIn}
        </button>
      </ul>
    </div>
  );
};

export default Header;
