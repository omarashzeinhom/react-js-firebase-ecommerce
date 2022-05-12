import React from "react";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Checkout() {
  return (
    <div className="checkout">

      <div className="checkout__left">
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
