import React from 'react'
import { Link } from 'react-router-dom'

import PizzaLogoIcon from 'icon:../../assets/icons/pizza-logo.svg'

import * as styles from './Header.module.scss'

const MainLogo = () => (
  <Link to="/" className={styles.logo}>
    <PizzaLogoIcon />
    <span>Куда пицца</span>
  </Link>
)

export default MainLogo
