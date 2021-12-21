import React, { useState, useEffect } from "react";

import "./App.scss";
import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import CardGrid from "./components/CardGrid/CardGrid";
import Cart from "./components/Cart/Cart";

function App() {
  const [sneakersList, setSneakersList] = useState([]);
  // const [cartData, setCartData] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const resSneakers = await fetch("http://localhost:3001/sneakers");
      setSneakersList(await resSneakers.json());
      const resCart = await fetch("http://localhost:3001/cart");
      setCartList(await resCart.json());
    };
    getData();
  }, []);
  // console.log(cartData);

  const calculateSum = (arr) => {
    return arr.reduce((sum, current) => sum + current.price, 0)
  }

  const addToCart = id => {
    const newCartItem = sneakersList.find(item => item.id === id);
    setCartList([...cartList, newCartItem]);
    const pushData = async () => {
      const resPushData = fetch("http://localhost:3001/cart", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newCartItem)
      });
    };
    pushData()
  };

  const removeFromCart = id => {
    setCartList(cartList.filter(item => item.id !== id));
    const deleteData = async () => {
      const resDeleteData = await fetch("http://localhost:3001/cart", {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
    }
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
      <Header setShowCart={setShowCart} calculateSum={calculateSum} cartList={cartList} />
      <Promo />
      <CardGrid sneakersList={sneakersList} addToCart={addToCart} />
    </div>
  );
}

export default App;
