import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.scss";
import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import CardGrid from "./components/CardGrid/CardGrid";
import Cart from "./components/Cart/Cart";

function App() {
  const BASE_URL = "http://localhost:3001/";
  const [sneakersList, setSneakersList] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const resSneakers = await axios(`${BASE_URL}sneakers`);
        const resCartList = await axios(`${BASE_URL}cart`);
        setSneakersList(resSneakers.data);
        setCartList(resCartList.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const calculateSum = (arr) => {
    return arr.reduce((sum, current) => sum + current.price, 0);
  };

  const addToCart = async (obj) => {
    try {
      const newCartItem = cartList.find((item) => Number(item.id) === Number(obj.id));
      if (newCartItem) {
        setCartList((prev) => prev.filter((item) => item !== newCartItem));
        await axios.delete(`${BASE_URL}cart${newCartItem.id}`);
      } else {
        setCartList((prev) => [...prev, newCartItem]);
        await axios.post(`${BASE_URL}cart`, newCartItem);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromCart = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
    const deleteData = async () => {
      const resDeleteData = await fetch("http://localhost:3001/cart", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
    };
  };

  return (
    <div className="App">
      {showCart && (
        <Cart
          cartList={cartList}
          setShowCart={setShowCart}
          removeFromCart={removeFromCart}
          calculateSum={calculateSum}
        />
      )}
      <Header
        setShowCart={setShowCart}
        calculateSum={calculateSum}
        cartList={cartList}
      />
      <Promo />
      <CardGrid sneakersList={sneakersList} addToCart={addToCart} />
    </div>
  );
}

export default App;
