import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import "./Product.css";
const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
const Product = (props) => {
  const { img, name, seller, price, stock, star } = props.product;
  return (
    <>
      <div className="product">
        <div className="product-img">
          <img src={img} alt="" />
        </div>
        <div className="product-info">
          <h4>{name}</h4>
          <div className="product-details">
            <div className="product-info-cart">
              <h5>By: {seller}</h5>
              <p>$ {price}</p>
              <p>only {stock} left in stock - order soon</p>
              <button
                onClick={() => props.handelAddToCart(props.product)}
                type="button"
              >
                {cartIcon} Add to cart
              </button>
            </div>
            <div className="product-info-features">
              <Rating
                initialRating={star}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
              />
              <h1> Features</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
