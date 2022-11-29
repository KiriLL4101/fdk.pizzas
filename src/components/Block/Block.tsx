import React from 'react'

import { BlockItem } from './BlockItem'

import * as styles from './Block.module.scss'
import { Pizza } from '../../redux/slices/pizzas'

interface BlockProps {
  items: Pizza[]
  title: string
}

const Block: React.FC<BlockProps> = ({ title, items }) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button>Фильтры</button>
      </div>
      <div className={styles.wrapper}>
        {items.map((value, idx) => (
          <BlockItem key={idx} {...value} />
        ))}
      </div>
    </div>
  )
}

export default Block
