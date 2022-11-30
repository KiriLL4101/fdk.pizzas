import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { useAppSelector } from '../../hooks/redux'

import BasketIcon from 'icon:../../assets/icons/basket.svg'

import * as styles from './BasketButton.module.scss'
import useSideBar from '../BasketSide/BasketItem.context'

export const BasketButton = memo(() => {
  const totalPrice = useAppSelector((state) => state.basket.totalPrice)
  const onToggle = useSideBar()

  return (
    <div className={styles.basket} onClick={onToggle}>
      <BasketIcon />
      <span>{totalPrice} ₽</span>
    </div>
  )
})
