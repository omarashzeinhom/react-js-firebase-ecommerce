import React from "react";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import JUMBOTRONIMG from "../../assets/images/background/checkout_ad.webp";

function Checkout() {
  return (
    <div className="checkout">

      <div className="checkout__left">
        <img className="checkout__ad" src={JUMBOTRONIMG} alt="" />
      </div>

      <div className="checkout__title">
        <h2>Welcome to your cart<ShoppingCartIcon/></h2>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
