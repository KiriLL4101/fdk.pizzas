import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../common/Button/Button'
import RightSide from '../../common/RightSide/RightSide'
import BasketSideItem from './BasketSideItem'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { hideBasket } from '../../redux/basket/basket'
import { groupBy } from '../../utils/groupBy'

import RemoveIcon from 'icon:../../assets/icons/remove.svg'

import * as styles from './BasketSide.module.scss'

const BasketSide = () => {
  const { items, totalPrice, visibleBar } = useAppSelector((state) => state.basket)
  const dispatch = useAppDispatch()

  const navigation = useNavigate()

  const onClose = () => {
    dispatch(hideBasket())
  }

  const onOrder = () => {
    onClose()
    navigation('/basket')
  }

  return (
    <RightSide isOpen={visibleBar} onClose={onClose}>
      <div className={styles.header}>
        <div>Ваш заказ</div>
        <RemoveIcon onClick={onClose} />
      </div>
      <div className={styles.content}>
        {items.length > 0 &&
          Object.entries(groupBy(items, 'id')).map(([id, list]) => {
            const priceSum = list.reduce((sum, val) => (sum += val.price), 0)

            return <BasketSideItem key={id} {...list[0]} counter={list.length} price={priceSum} />
          })}
      </div>
      <div className={styles.footer}>
        <span>Итого: {totalPrice} ₽</span>
        <Button onClick={onOrder}>Оформить заказ</Button>
      </div>
    </RightSide>
  )
}

export default BasketSide
