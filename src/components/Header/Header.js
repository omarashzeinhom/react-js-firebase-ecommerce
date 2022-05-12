import React from "react";
import "./Header.css";
import { Link } from "react-router-dom/umd/react-router-dom.development";
import { useStateValue } from "../StateProvider/StateProvider";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  const [{cart}, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <h1 className="header__logoText">TheShop</h1>
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="search" />
        <SearchIcon className="header__searchIcon" size="large" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

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
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__optionCart">{cart?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
