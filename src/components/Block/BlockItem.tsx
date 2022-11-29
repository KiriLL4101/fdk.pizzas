import React from 'react'

import { Button } from '../../common/Button/Button'
import type { Pizza } from '../../redux/slices/pizzas'

import PizzaTestImg from '../../assets/images/pizza-test.jpg'

import * as styles from './Block.module.scss'

export const BlockItem: React.FC<Pizza> = ({ title, imageUrl, price, ingredients }) => {
  return (
    <div className={styles.item}>
      <img className={styles.images} src={imageUrl} alt="Pizza" />
      <div className={styles.info}>
        <h4>{title}</h4>
        <p>{ingredients}</p>
        <div className={styles.bottom}>
          <Button>Выбрать</Button>
          <span>от {price} ₽</span>
        </div>
      </div>
    </div>
  )
}
