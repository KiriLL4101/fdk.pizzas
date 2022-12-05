import React from 'react'

import NumericInput from '../../common/NumericInput/NumericInput'
import { useAppSelector } from '../../hooks/redux'

import * as styles from './OrderForm.module.scss'

export const OrderForm = () => {
  const { items } = useAppSelector((state) => state.basket)

  return (
    <div className={styles.root}>
      <h1>Ваш заказ</h1>
      <div className={styles.wrapper}>
        {items.length > 0 &&
          items.map((pizza) => {
            return (
              <div className={styles.item}>
                <img src={pizza.imageUrl} alt="Pizza" />

                <div className={styles.info}>
                  <h6>{pizza.title}</h6>
                  <p>Традиционное тесто, 23 см</p>
                  <div>
                    <NumericInput />
                    <span>{pizza.price} ₽</span>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
