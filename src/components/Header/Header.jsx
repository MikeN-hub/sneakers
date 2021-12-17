import logo from '../../img/logo.png'
import cart from '../../img/cart.png'
import heart from '../../img/heart.png'
import login from '../../img/login.png'
import './Header.scss'

const Header = () => {
  return (
    <div className="Header">
      <div className="headerLeft">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="headerTitle">
          <h1>react sneakers</h1>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <div className="headerRight">
        <div className="cart">
          <img src={cart} alt="" />
          <span className="price">1205 руб.</span>
        </div>
        <div className="heart">
          <img src={heart} alt="" />
        </div>
        <div className="login">
          <img src={login} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
