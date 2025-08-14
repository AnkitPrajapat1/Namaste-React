import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  return (
    <div className="header">
      <img src={LOGO_URL} alt="" />
      <ul className="nav-items">
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
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
