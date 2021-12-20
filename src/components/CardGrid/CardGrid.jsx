import React, {useState} from "react";
import Card from "../Card/Card";
import "./CardGrid.scss";
import Search from "../Search/Search";

const CardGrid = ({ sneakersList, addToCart }) => {

  const [searchText, setSearchText] = useState('');

  return (
    <div className="CardGrid">
      <div className="cardGridTitle">
        <h1>Все кроссовки</h1>
        <Search setSearchText={setSearchText}/>
      </div>
      <div className="cardGridWrapper">
        {sneakersList.filter(sneakers => (sneakers.brand + sneakers.name).toLowerCase().includes(searchText.toLowerCase())).map(sneakers => (
          <Card key={sneakers.id} sneakers={sneakers} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
