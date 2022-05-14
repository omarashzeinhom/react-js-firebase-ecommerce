import React from "react";
import "./Header.css";
import { Link } from "react-router-dom/umd/react-router-dom.development";
import { useStateValue } from "../StateProvider/StateProvider";
import { FaOpencart, FaSearch } from "react-icons/fa";
import { auth } from "../../firebase";
const Header = () => {
  const [{ cart, user }] = useStateValue();

  // Handling sign in or sign out
  const handleAuthentication= () => {
    // if there is a user signout and go to login page
    if (user){
      auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <h1 className="header__logoText">TheShop</h1>
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="search" />
        <FaSearch className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <button className="header__btn">{user ? 'Sign Out' : 'Sign In'}</button>
          </div>
        </Link>
        1
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout" className="header__optionCart">
          <div className="header__optionCart">
            <FaOpencart />
            <span className="header__optionLineTwo header__optionCart">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
