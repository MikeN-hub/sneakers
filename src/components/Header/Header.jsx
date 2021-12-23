import './Header.scss'

const Header = ({ setShowCart, calculateSum, cartList}) => {

  const handleCartClick = () => {
    
  }

  return (
    <div className="Header">
      <div className="headerLeft">
        <div className="logo">
          <img src='img/icons/logo.png' alt="" />
        </div>
        <div className="headerTitle">
          <h1>react sneakers</h1>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <div className="headerRight">
        <div className="cart">
          <img onClick={() => setShowCart(true)} className='cartIcon' src='img/icons/cart.png' alt="" />
          <span className="price">{calculateSum(cartList)}, 00 р.</span>
        </div>
        <div className="heart">
          <img src='img/icons/heart.png' alt="" />
        </div>
        <div className="login">
          <img src='img/icons/login.png' alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
