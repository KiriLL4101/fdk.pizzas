import React from 'react'

import { useAppDispatch } from '../hooks/redux'

import MinusIcon from 'icon:../assets/img/minus.svg'
import PlusIcon from 'icon:../assets/img/plus.svg'
import RemoveIcon from 'icon:../assets/img/remove.svg'

import { addItem, CartItem, minusItem, removeItem } from '../redux/slices/cartSlice'

const BasketItem = (props) => {
  const { id, imageUrl, title, type, size, price, count } = props

  const dispatch = useAppDispatch()

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      } as Omit<CartItem, 'count'>),
    )
  }

  const onClickMinus = () => {
    dispatch(minusItem(id))
  }

  const onClickRemove = () => {
    if (window.confirm('Ты действительно хочешь удалить товар?')) {
      dispatch(removeItem(id))
    }
  }

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{title}</h3>
        <p>
          {type}, {size} см.
        </p>
      </div>
      <div className="cart__item-count">
        <div
          className="button button--outline button--circle cart__item-count-minus"
          onClick={onClickMinus}
        >
          <MinusIcon />
        </div>
        <b>{count}</b>
        <div
          className="button button--outline button--circle cart__item-count-plus"
          onClick={onClickPlus}
        >
          <PlusIcon />
        </div>
      </div>
      <div className="cart__item-price">
        <b>{price * count} ₽</b>
      </div>
      <div className="cart__item-remove">
        <div className="button button--outline button--circle" onClick={onClickRemove}>
          <RemoveIcon />
        </div>
      </div>
    </div>
  )
}

export default BasketItem
