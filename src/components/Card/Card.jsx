import React from "react";
import './Card.scss'

const Card = ({ sneakers, addToCart }) => {
  return (
    <div className="Card">
      <div className="cardPhoto">
        <img src={sneakers.photo} alt="" />
      </div>
      <p>Мужские кроссовки</p>
      <p>
        {sneakers.brand} {sneakers.name}
      </p>
      <div className="cardFooter">
        <div className="price">
          <p>Цена:</p>
          <p>{sneakers.price} руб.</p>
        </div>
        <button onClick={() => addToCart(sneakers.id)} className="addToCart-btn">+</button>
      </div>
    </div>
  );
};

export default Card;
