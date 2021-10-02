import React from "react";
import { useHistory } from "react-router";
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import useCart from "./../../hooks/useCart";
import useProducts from "./../../hooks/useProducts";

const OrderReview = () => {
  const [products] = useProducts();
  const [carts, setCart] = useCart(products);
  const history = useHistory();
  const handelRemoveToCart = (key) => {
    const newCart = carts.filter((product) => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
  };
  const handelPlaceOrder = () => {
    history.push("/place-order");
    setCart([]);
    clearTheCart();
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {carts.map((cart) => (
          <ReviewItem
            handelRemoveToCart={handelRemoveToCart}
            key={cart.key}
            cart={cart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={carts}>
          <button onClick={handelPlaceOrder}>Plase Order</button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
