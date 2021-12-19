import React from "react";
import "./Promo.scss";

const Promo = () => {
  return (
    <div className="Kermit">
      <div className="kermitLeft">
        <div className="adidasDisney">
          <img src='img/icons/adidasDisney.png' alt="" />
        </div>
        <div className="kermitText">
          <p><span>StanSmith</span><span>,</span></p>
          <p>Forever!</p>
        </div>
        <button className="buy">Купить</button>
      </div>
      <div className="kermit-right">
        <img src='img/kermit.png' alt="" />
      </div>
      <img className="arrowRight" src='img/icons/arrowRight.png' alt="" width={50} height={50}/>
    </div>
  );
};

export default Promo;
