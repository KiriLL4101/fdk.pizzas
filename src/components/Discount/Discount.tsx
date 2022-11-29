import React from 'react'

import PizzaSales from '../../assets/images/pizza-sales.jpg'
import PizzaBoxSales from '../../assets/images/pizza-box-sales.jpg'

import * as styles from './Discount.module.scss'

const discountList = [
  {
    name: '3 средние пиццы от 999 рублей',
    imageUrl: PizzaSales,
  },
  {
    name: 'Кэшбек 10% на самовывоз (доставка)',
    imageUrl: PizzaBoxSales,
  },
  {
    name: '3 средние пиццы от 999 рублей',
    imageUrl: PizzaSales,
  },
  {
    name: 'Кэшбек 10% на самовывоз (доставка)',
    imageUrl: PizzaBoxSales,
  },
]

const Discount = () => {
  return (
    <div className={styles.root}>
      {discountList.map(({ name, imageUrl }, idx) => (
        <div key={idx} className={styles.item} style={{ backgroundImage: `url(${imageUrl})` }}>
          <span>{name}</span>
        </div>
      ))}
    </div>
  )
}

export default Discount
