import React, { memo } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { showBasket } from '../../redux/basket/basket'

import BasketIcon from 'icon:../../assets/icons/basket.svg'

import * as styles from './BasketButton.module.scss'

export const BasketButton = memo(() => {
  const totalPrice = useAppSelector((state) => state.basket.totalPrice)
  const dispatch = useAppDispatch()

  const onOpen = () => {
    dispatch(showBasket())
  }

  return (
    <div className={styles.basket} onClick={onOpen}>
      <BasketIcon />
      <span>{totalPrice} ₽</span>
    </div>
  )
})
