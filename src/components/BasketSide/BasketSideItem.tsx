import React from 'react'

import NumericInput from '../../common/NumericInput/NumericInput'
import type { Product } from '../../redux/product/types'
import type { ArrayElementType } from '../../utils/types/ArrayElementType'

import * as styles from './BasketSide.module.scss'

type BasketSideItemProps = ArrayElementType<Product[keyof Product]> & {
  counter: number
}

const BasketSideItem: React.FC<BasketSideItemProps> = ({ imageUrl, title, price, counter }) => {
  return (
    <div className={styles.item}>
      <img src={imageUrl} alt="Pizza" />

      <div className={styles.info}>
        <h6>{title}</h6>
        <p>Традиционное тесто, 23 см</p>
        <div>
          <NumericInput counter={counter} onChange={(value) => console.log(value)} />
          <span>{price} ₽</span>
        </div>
      </div>
    </div>
  )
}

export default BasketSideItem
