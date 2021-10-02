import React from "react";

const ReviewItem = (props) => {
  const { name, seller, price, stock, key } = props.cart;
  return (
    <div className="product">
      <div className="product-info">
        <h4>{name}</h4>
        <div className="product-details">
          <div className="product-info-cart">
            <h5>By: {seller}</h5>
            <p>$ {price}</p>
            <p>only {stock} left in stock - order soon</p>
            <button onClick={() => props.handelRemoveToCart(key)} type="button">
              Remove to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
