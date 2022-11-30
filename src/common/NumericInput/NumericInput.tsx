import React, { useState } from 'react'

import * as styles from './NumericInput.module.scss'

const NumericInput = () => {
  const [counter, setCounter] = useState(1)

  return (
    <div className={styles.root}>
      <button onClick={() => setCounter((prev) => prev - 1)} disabled={!counter}>
        -
      </button>

      <span className={styles.input}>
        {counter}
        {/* <input type="text" value={counter} readOnly /> */}
      </span>

      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </div>
  )
}

export default NumericInput
