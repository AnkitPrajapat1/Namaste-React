import {LOGO_URL} from "../utils/constants.js";
const Header = () => {
  return (
    <div className="header">
      <img
      src={LOGO_URL}
        alt=""
      />
      <ul className="nav-items">
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;