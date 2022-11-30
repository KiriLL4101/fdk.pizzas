import React, { useEffect } from 'react'

import Portal from '../../common/Portal/Portal'
import { Button } from '../../common/Button/Button'
import BasketSideItem from './BasketSideItem'

import RemoveIcon from 'icon:../../assets/icons/remove.svg'

import * as styles from './BasketSide.module.scss'
import { useAppSelector } from '../../hooks/redux'

export interface BasketSideProps {
  isOpen: boolean
  onClose?: () => void
}

const BasketSide: React.FC<BasketSideProps> = ({ isOpen, onClose }) => {
  const { items, totalPrice } = useAppSelector((state) => state.basket)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  return (
    <Portal>
      <div className={styles.blur} onClick={onClose} />
      <div className={styles.right}>
        <div className={styles.header}>
          <div>Ваш заказ</div>
          <RemoveIcon onClick={onClose} />
        </div>
        <div className={styles.content}>
          {items.length > 0 && items.map((val) => <BasketSideItem key={val.id} {...val} />)}
        </div>
        <div className={styles.footer}>
          <span>Итого: {totalPrice} ₽</span>
          <Button>Оформить заказ</Button>
        </div>
      </div>
    </Portal>
  )
}

export default BasketSide
