import React, { useState, useEffect } from "react";

import "./App.scss";
import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import CardGrid from "./components/CardGrid/CardGrid";
import Cart from "./components/Cart/Cart";

function App() {
  const [sneakersList, setSneakersList] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const resData = await fetch("http://localhost:3001/sneakers");
      const data = await resData.json();
      setSneakersList(data);
    };
    getData();
  }, []);

  const addToCart = (id) => {
    const newCartItem = sneakersList.find(item => item.id === id)
    setCartList([...cartList, newCartItem]);
  };


  return (
    <div className="App">
      {showCart && <Cart cartList={cartList}/>}
      <Header setShowCart={setShowCart} />
      <Promo />
      <CardGrid sneakersList={sneakersList} addToCart={addToCart} />
    </div>
  );
}

export default App;
