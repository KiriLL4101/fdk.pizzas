import React from 'react'

import { Button } from '../../common/Button/Button'
import { useAppDispatch } from '../../hooks/redux'
import { addItem } from '../../redux/basket/basket'
import type { Product } from '../../redux/product/types'
import type { ArrayElementType } from '../../utils/types/ArrayElementType'

import * as styles from './Block.module.scss'

type BlockItemProps = ArrayElementType<Product[keyof Product]>

export const BlockItem: React.FC<BlockItemProps> = (props) => {
  const { title, imageUrl, price, description } = props

  const dispatch = useAppDispatch()

  const onAddBasket = () => {
    dispatch(addItem(props))
  }

  return (
    <div className={styles.item}>
      <img src={imageUrl} alt="Pizza" />
      <div className={styles.info}>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className={styles.bottom} onClick={onAddBasket}>
          <Button>Выбрать</Button>
          <span>от {price} ₽</span>
        </div>
      </div>
    </div>
  )
}
