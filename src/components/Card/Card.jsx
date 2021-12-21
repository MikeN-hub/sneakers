import React, { useState } from 'react'
import './Card.scss'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineCheck } from 'react-icons/ai'

const Card = ({ sneakers, addToCart }) => {
  const [pushedToCart, setPushedToCart] = useState(false)
  const plusHandler = () => {
    addToCart(sneakers.id)
    setPushedToCart(!pushedToCart)
  }
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
        <button onClick={plusHandler} className="addToCart-btn">
          {pushedToCart ? <AiOutlineCheck color='green'/> : <AiOutlinePlus />}
        </button>
      </div>
    </div>
  )
}

export default Card
