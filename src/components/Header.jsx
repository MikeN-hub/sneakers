import React from "react";
import logos from "../img/logos.png";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="login">
        <button className="btn-login">Log in</button>
      </div>
      <div className="subscription-block">
        <h3 className="title">BUNDLE WITH ANY HULU PLAN & SAVE</h3>
        <div className="brands">
          <img src={logos} alt="" width="600" />
        </div>
        <div className="text">
          Get endless entertainment, live sports, and the shows and movies you
          love.
        </div>
        <button className="btn-1">get the disney bundle</button>
        <div className="details">
          <a href="#">See details</a>
          <span>and</span>
          <a href="#">Bundle terms</a>
        </div>
      </div>
      <div className="trial-block">
        <h4>try up to one more free</h4>
        <div className="wrapper">
          <div className="brand"><img src={logo} alt="" width='100'/></div>
          <div className="text">
            Here just for Hulu? Get thousands of TV shows and movies.
          </div>
          <button className="btn-2">start your free trial</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
