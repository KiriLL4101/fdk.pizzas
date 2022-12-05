import React, { useEffect } from 'react'

import Portal from '../Portal/Portal'

import * as styles from './RightSide.module.scss'

export interface RightSideProps {
  children: React.ReactNode
  isOpen: boolean
  onClose?: () => void
}

const RightSide: React.FC<RightSideProps> = ({ isOpen, onClose, children }) => {
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
  console.log(isOpen)

  return (
    <Portal>
      <div className={styles.blur} onClick={onClose} />
      <div className={styles.right}>{children}</div>
    </Portal>
  )
}

export default RightSide
