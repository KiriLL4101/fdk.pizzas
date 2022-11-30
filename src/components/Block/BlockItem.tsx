import React from 'react'

import { Button } from '../../common/Button/Button'
import type { Product } from '../../redux/product/types'

import * as styles from './Block.module.scss'

type ArrayElementType<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never

type BlockItemProps = ArrayElementType<Product[keyof Product]>

export const BlockItem: React.FC<BlockItemProps> = (props) => {
  const { title, imageUrl, price, description, ...other } = props

  return (
    <div className={styles.item}>
      <img src={imageUrl} alt="Pizza" />
      <div className={styles.info}>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className={styles.bottom}>
          <Button>Выбрать</Button>
          <span>от {price} ₽</span>
        </div>
      </div>
    </div>
  )
}
