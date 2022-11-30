import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { useAppSelector } from '../../hooks/redux'

import BasketIcon from 'icon:../../assets/icons/basket.svg'

import * as styles from './BasketButton.module.scss'

export const BasketButton = memo(() => {
  const totalPrice = useAppSelector((state) => state.basket.totalPrice)

  return (
    <Link to={'/basket'} className={styles.basket}>
      <BasketIcon />
      <span>{totalPrice} ₽</span>
    </Link>
  )
})
