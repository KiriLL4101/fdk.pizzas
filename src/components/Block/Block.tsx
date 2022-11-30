import React from 'react'

import { BlockItem } from './BlockItem'

import * as styles from './Block.module.scss'
import type { Product } from '../../redux/product/types'

interface BlockProps {
  items: Product[keyof Product]
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
