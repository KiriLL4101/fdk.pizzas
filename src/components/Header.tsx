import React from "react";
import { Link } from "react-router-dom";

import logoPizza from "../assets/img/pizza-logo.svg";
import CartIcon from "icon:../assets/img/cart.svg";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src={logoPizza} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>

        <div className="header__cart">
          <Link to="/basket" className="button button--cart">
            <span>520 ₽</span>
            <div className="button__delimiter"></div>
            <CartIcon />
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
