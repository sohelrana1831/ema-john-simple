import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Product from "../Product/Product";
import Cart from "./../Cart/Cart";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displaySerchProduct, setDisplaySerchProduct] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((Response) => Response.json())
      .then((products) => {
        setProducts(products);
        setDisplaySerchProduct(products);
      });
  }, []);

  useEffect(() => {
    const saveCart = getStoredCart();

    if (products.length) {
      const sotredCart = [];
      for (const key in saveCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = saveCart[key];
          addedProduct.quantity = quantity;
          sotredCart.push(addedProduct);
        }
      }
      setCart(sotredCart);
    }
  }, [products]);

  const handelAddToCart = (product) => {
    const exists = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => pd.key !== product.key);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDb(product.key);
  };

  const handelSearch = (e) => {
    const searchText = e.target.value;
    const matchSerach = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplaySerchProduct(matchSerach);
  };

  return (
    <>
      <div className="search-container">
        <input
          onChange={handelSearch}
          type="text"
          name="product"
          id="product"
          placeholder="Search Product..."
        />
      </div>
      <div className="shop-container">
        <div className="product-container">
          {displaySerchProduct.map((product) => (
            <Product
              key={product.key}
              product={product}
              handelAddToCart={handelAddToCart}
            />
          ))}
        </div>

        <div className="cart-container">
          <Cart cart={cart}>
            <Link to="/review">
              <button className="cart-area">Review Order</button>
            </Link>
          </Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
