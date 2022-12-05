import React from 'react'

import * as styles from './NumericInput.module.scss'

interface NumericInputProps {
  counter: number
  onChange?: (value: number) => void
}

const NumericInput: React.FC<NumericInputProps> = ({ counter = 1, onChange }) => {
  return (
    <div className={styles.root}>
      <button onClick={() => onChange(--counter)} disabled={!counter}>
        -
      </button>

      <span className={styles.input}>
        {counter}
        {/* <input type="text" value={counter} readOnly /> */}
      </span>

      <button onClick={() => onChange(++counter)}>+</button>
    </div>
  )
}

export default NumericInput
