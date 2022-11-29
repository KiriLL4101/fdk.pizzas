import React from 'react'

import FireIcon from 'icon:../../assets/icons/fire.svg'
import PizzaIcon from 'icon:../../assets/icons/pizza.svg'
import SushiIcon from 'icon:../../assets/icons/sushi.svg'
import DrinkIcon from 'icon:../../assets/icons/drink.svg'
import SnacksIcon from 'icon:../../assets/icons/snacks.svg'
import ComboIcon from 'icon:../../assets/icons/combo.svg'
import DessertIcon from 'icon:../../assets/icons/dessert.svg'
import SauceIcon from 'icon:../../assets/icons/sauce.svg'

import * as styles from './Categories.module.scss'

const categories = [
  {
    Icon: FireIcon,
    name: 'Акции',
  },
  {
    Icon: PizzaIcon,
    name: 'Пицца',
  },
  {
    Icon: SushiIcon,
    name: 'Суши',
  },
  {
    Icon: DrinkIcon,
    name: 'Напитки',
  },
  {
    Icon: SnacksIcon,
    name: 'Закуски',
  },
  {
    Icon: ComboIcon,
    name: 'Комбо',
  },
  {
    Icon: DessertIcon,
    name: 'Десерты',
  },
  {
    Icon: SauceIcon,
    name: 'Соусы',
  },
]

const Categories: React.FC = () => {
  return (
    <ul className={styles.root}>
      {categories.map(({ Icon, name }, idx) => (
        <li className={styles.item} key={idx}>
          <Icon />
          <span>{name}</span>
        </li>
      ))}
    </ul>
  )
}

export default Categories
