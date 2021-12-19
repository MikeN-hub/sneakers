import React from "react";
import Card from "../Card/Card";
import "./CardGrid.scss";

const CardGrid = ({ sneakersList, addToCart }) => {
  return (
    <div className="CardGrid">
      <h1 className="cardGridTitle">Все кроссовки</h1>
      <div className="cardGridWrapper">
        {sneakersList.map(sneakers => (
          <Card key={sneakers.id} sneakers={sneakers} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
