import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../../common/Button/Button'
import RightSide from '../../common/RightSide/RightSide'
import BasketSideItem from './BasketSideItem'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { hideBasket } from '../../redux/basket/basket'

import RemoveIcon from 'icon:../../assets/icons/remove.svg'

import * as styles from './BasketSide.module.scss'

const BasketSide = () => {
  const { items, totalPrice, visibleBar } = useAppSelector((state) => state.basket)
  const dispatch = useAppDispatch()

  const onClose = () => {
    dispatch(hideBasket())
  }

  return (
    <RightSide isOpen={visibleBar} onClose={onClose}>
      <div className={styles.header}>
        <div>Ваш заказ</div>
        <RemoveIcon onClick={onClose} />
      </div>
      <div className={styles.content}>
        {items.length > 0 && items.map((val) => <BasketSideItem key={val.id} {...val} />)}
      </div>
      <div className={styles.footer}>
        <span>Итого: {totalPrice} ₽</span>
        <Button>
          <Link to="/basket">Оформить заказ</Link>
        </Button>
      </div>
    </RightSide>
  )
}

export default BasketSide
