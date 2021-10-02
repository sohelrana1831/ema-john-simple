import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let totalQuantity = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = (total + product.price) * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }
  let shipping = total ? 15 : 0;

  let tax = (shipping + total) * 0.1;
  let grandTotal = total + shipping + tax;

  return (
    <div className="">
      <h1>Order summery</h1>
      <h1>Items ordered: {totalQuantity}</h1>
      <h1>Total: $ {total.toFixed(2)}</h1>
      <h1>Shipping: $ {shipping}</h1>
      <h1>Tax: $ {tax.toFixed(2)}</h1>
      <h1>Grand Total: $ {grandTotal.toFixed(2)}</h1>
      {props.children}
    </div>
  );
};

export default Cart;
