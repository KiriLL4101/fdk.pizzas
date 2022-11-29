import React from 'react'

import * as styles from './Button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  variant?: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
  return (
    <button
      className={styles.button}
      {...props}
    >
      {children}
    </button>
  )
}
