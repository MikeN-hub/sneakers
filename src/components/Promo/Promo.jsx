import React from "react";
import kermit from "../../img/kermit.png";
import adidasDisney from "../../img/adidasDisney.png";
import arrowRight from "../../img/arrowRight.png";
import "./Promo.scss";

const Promo = () => {
  return (
    <div className="Kermit">
      <div className="kermitLeft">
        <div className="adidasDisney">
          <img src={adidasDisney} alt="" />
        </div>
        <div className="kermitText">
          <p><span>StanSmith</span><span>,</span></p>
          <p>Forever!</p>
        </div>
        <button className="buy">Купить</button>
      </div>
      <div className="kermit-right">
        <img src={kermit} alt="" />
      </div>
      <img className="arrowRight" src={arrowRight} alt="" width={50} height={50}/>
    </div>
  );
};

export default Promo;
