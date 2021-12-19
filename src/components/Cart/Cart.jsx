import React from "react";
import "./Cart.scss";

const Cart = ({ cartList }) => {
  return (
    <div className="Cart">
      <div className="overlay">
        <div className="cartWrapper">
          <div className="top-wrapper">
            <h2>Корзина</h2>
            {cartList.map((item, index) => (
              <div key={index} className="cartItem">
                <img src={item.photo} alt="" width={100} />
                <div className="content">
                  <p>Мужские кроссовки</p>
                  <p>{item.name}</p>
                  <p>{item.price} руб.</p>
                </div>
                <button className="rmFromCart">x</button>
              </div>
            ))}
          </div>
          <div className="bottom-wrapper">
            <div className="total">
              <p>Итого:</p>
              <p>{cartList.reduce((sum, current) => sum + current.price, 0)}</p>
            </div>
            <div className="tax">
              <p>Налог:</p>
              {cartList.reduce((sum, current) => sum + current.price, 0) * 0.05}
            </div>
            <button className="charge">
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
