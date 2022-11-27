import React from 'react'
import { Link } from 'react-router-dom'

import { Search } from './Search'
import { useAppSelector } from '../hooks/redux'

import logoPizza from '../assets/img/pizza-logo.svg'
import CartIcon from 'icon:../assets/img/cart.svg'

const Header: React.FC = () => {
  const { items, totalPrice } = useAppSelector((state) => state.cart)
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          {/* <img width="38" src={logoPizza} alt="Pizza logo" /> */}
          <div>
            <h1>fdk.pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <Search />
        <div className="header__cart">
          <Link to="/basket" className="button button--cart">
            <span>{totalPrice} ₽</span>
            <div className="button__delimiter"></div>
            <CartIcon />
            <span>{items.length}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
