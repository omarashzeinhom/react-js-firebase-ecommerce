import React from "react";
import "./Product.css";

function Product({ id, title, image, price , rating}) {
  return (
    <div className="product">
      {/** Product Info Start */}
      <div className="product__info">
        <p>{title }</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
        {Array(rating).fill().map(( _, i) => (
          <p>⭐</p>
        ))}
        </div>
      </div>
      {/** Product Info end */}
      <img src={image} loading="lazy" alt="product-img"/>
      <button>Add Product to basket</button>
    </div>
  );
}

export default Product;
