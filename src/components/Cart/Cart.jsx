import React, { useRef } from "react";
import "./Cart.scss";

const Cart = ({ cartList, setShowCart, removeFromCart }) => {
  const docRef = useRef();

  const onOverlayClick = e => {
    setShowCart(false);
    e.stopPropagation();
  };

  const onCartClick = e => {
    e.stopPropagation();
  };

  return (
    <div className="Cart">
      <div onClick={onOverlayClick} className="overlay">
        <div onClick={onCartClick} className="cartWrapper">
          <div className="top-wrapper">
            <h2>Корзина</h2>
            {cartList.length === 0 && 
            <div className="emptyCart">
              <img src="img/icons/emptyCart.png" alt="" />
              <p>Корзина пустая</p>
              <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
            </div>}
            {cartList.map((item, index) => (
              <div key={index} className="cartItem">
                <img src={item.photo} alt="" width={100} />
                <div className="content">
                  <p>Мужские кроссовки</p>
                  <p>{item.name}</p>
                  <p>{item.price} руб.</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="rmFromCart">x</button>
              </div>
            ))}
          </div>
          <div className="bottom-wrapper">
            <div className="total">
              <p>Итого:</p>
              <p>{cartList.reduce((sum, current) => sum + current.price, 0)} руб.</p>
            </div>
            <div className="tax">
              <p>Налог:</p>
              <p>{cartList.reduce((sum, current) => sum + current.price, 0) * 0.05} руб.</p>
            </div>
            <button className="charge">Оформить заказ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
