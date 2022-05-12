import React from 'react'
import './CheckoutProduct.css'


function CheckoutProduct({id, image, title , price, rating}) {
  return (
    <div className="checkoutProudct">
        <img className="checkoutProduct__image" src={image}/>

        <div className="checkoutProduct__input">
            <p className="checkoutProduct__title">{title}</p> 
            <p className="checkoutProduct__price">{price}</p>
            <small>$</small>
            <strong>{price}</strong>
            <div className="checkoutProduct__rating">
        {Array(rating).fill().map(() => (
          <p>⭐</p>
        ))}
        <button className="checkoutProduct__remove"></button>
        </div>
        </div>
    </div>
  )
}

export default CheckoutProduct