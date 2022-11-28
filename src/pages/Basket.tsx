import React from 'react'
import { Link } from 'react-router-dom'

import BasketItem from '../components/BasketItem'
import NotFound from './NotFound'
import { useAppDispatch, useAppSelector } from '../hooks/redux'

import CartIcon from 'icon:../assets/img/cart.svg'
import TrashIcon from 'icon:../assets/img/trash.svg'
import ArrowLeftIcon from 'icon:../assets/img/arrow-left.svg'
import { clearItems } from '../redux/slices/cart'

const Basket = () => {
  const dispatch = useAppDispatch()
  const { items, totalPrice } = useAppSelector((state) => state.cart)

  const addedCount = items.reduce((sum, val) => (sum += val.count), 0)

  const clearBasket = () => {
    dispatch(clearItems())
  }

  if (!items.length) {
    return <NotFound />
  }

  return (
    <>
      <div className="container--cart">
        <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">
              <CartIcon />
              Корзина
            </h2>
            <div className="cart__clear" onClick={clearBasket}>
              <TrashIcon />
              <span>Очистить корзину</span>
            </div>
          </div>
          <div className="cart__items">
            {items.length > 0 && items.map((pizza) => <BasketItem key={pizza.id} {...pizza} />)}
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              <span>
                Всего пицц: <b>{addedCount} шт.</b>
              </span>
              <span>
                Сумма заказа: <b>{totalPrice} ₽</b>
              </span>
            </div>
            <div className="cart__bottom-buttons">
              <Link to="/" className="button button--outline button--add go-back-btn">
                <ArrowLeftIcon />
                <span>Вернуться назад</span>
              </Link>
              <div className="button pay-btn">
                <span>Оплатить сейчас</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Basket
