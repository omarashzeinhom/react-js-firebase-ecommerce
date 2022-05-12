import React from "react";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import JUMBOTRONIMG from "../../assets/images/background/checkout_ad.webp";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider/StateProvider";

function Checkout() {
  const [{ cart }] = useStateValue();
  return (
<div className="checkout__billboard">
<img
          className="checkout__ad"
          src={JUMBOTRONIMG}
          alt="checkoutad"
          loading="lazy"
        />
        
    <div className="checkout__title">
        <h2>
          Welcome to your cart
          <ShoppingCartIcon />
        </h2>
      </div>

      
    <div className="checkout">
      <div className="checkout__left">
        {cart.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
       
      </div>

    

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
    </div>

  );
}

export default Checkout;
