import React, { useEffect } from 'react'

import Portal from '../../common/Portal/Portal'
import { Button } from '../../common/Button/Button'
import BasketItem from './BasketItem'

import RemoveIcon from 'icon:../../assets/icons/remove.svg'

import * as styles from './BasketSide.module.scss'

export interface BasketSideProps {
  isOpen: boolean
  onClose?: () => void
}

const BasketSide: React.FC<BasketSideProps> = ({ isOpen, onClose }) => {
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
          <BasketItem />
          <BasketItem />
          <BasketItem />
        </div>
        <div className={styles.footer}>
          <span>Итого: 2 379 ₽</span>
          <Button>Оформить заказ</Button>
        </div>
      </div>
    </Portal>
  )
}

export default BasketSide
