import React from 'react'
import { Link } from 'react-router-dom'

import FireIcon from 'icon:../../assets/icons/fire.svg'
import PizzaIcon from 'icon:../../assets/icons/pizza.svg'
import SushiIcon from 'icon:../../assets/icons/sushi.svg'
import DrinkIcon from 'icon:../../assets/icons/drink.svg'
import SnacksIcon from 'icon:../../assets/icons/snacks.svg'
import ComboIcon from 'icon:../../assets/icons/combo.svg'
import DessertIcon from 'icon:../../assets/icons/dessert.svg'
import SauceIcon from 'icon:../../assets/icons/sauce.svg'

import * as styles from './Categories.module.scss'

export const categories = {
  fire: {
    Icon: FireIcon,
    name: 'Акции',
  },
  pizzas: {
    Icon: PizzaIcon,
    name: 'Пицца',
  },
  sushi: {
    Icon: SushiIcon,
    name: 'Суши',
  },
  drink: {
    Icon: DrinkIcon,
    name: 'Напитки',
  },
  snacks: {
    Icon: SnacksIcon,
    name: 'Закуски',
  },
  combo: {
    Icon: ComboIcon,
    name: 'Комбо',
  },
  desserts: {
    Icon: DessertIcon,
    name: 'Десерты',
  },
  sauce: {
    Icon: SauceIcon,
    name: 'Соусы',
  },
}

const Categories: React.FC<{ inline?: boolean }> = ({ inline }) => {
  return (
    <div className={styles.root}>
      {Object.entries(categories).map(([key, { name, Icon }], idx) =>
        inline ? (
          <Link to={`/menu/${key}`} className={styles.inline} key={idx}>
            {name}
          </Link>
        ) : (
          <Link to={`/menu/${key}`} className={styles.item} key={idx}>
            <Icon />
            <span>{name}</span>
          </Link>
        ),
      )}
    </div>
  )
}

export default Categories
