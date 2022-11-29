import React from 'react'

import * as styles from './Field.module.scss'

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> &
  React.RefAttributes<HTMLInputElement>

export const Field: React.FC<FieldProps> = ({ ...props }) => {
  return (
    <label className={styles.label}>
      <input {...props} className={styles.field} />
    </label>
  )
}
