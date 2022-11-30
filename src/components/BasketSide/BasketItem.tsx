import React from 'react'

import NumericInput from '../../common/NumericInput/NumericInput'

import * as styles from './BasketSide.module.scss'

const BasketItem = () => {
  return (
    <div className={styles.item}>
      <img
        src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg"
        alt="Pizza"
      />

      <div className={styles.info}>
        <h6>Чикен Сладкий Чили</h6>
        <p>Традиционное тесто, 23 см</p>
        <div>
          <NumericInput />
          <span>499 ₽</span>
        </div>
      </div>
    </div>
  )
}

export default BasketItem
