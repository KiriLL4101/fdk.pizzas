import React from 'react'

import MainLogo from './MainLogo'
import { BasketButton } from '../BasketButton/BasketButton'

import ArrowDownIcon from 'icon:../../assets/icons/arrow-down.svg'
import LocationIcon from 'icon:../../assets/icons/location.svg'
import AccountIcon from 'icon:../../assets/icons/account.svg'

import * as styles from './Header.module.scss'

const Header: React.FC = () => {
  return (
    <header className={styles.root}>
      <div className="container">
        <div className={styles.subheader}>
          <div className={styles.location}>
            <LocationIcon />
            <span>Москва</span>
            <ArrowDownIcon />
          </div>
          <span>Проверить адрес</span>
          <div className={styles.avgTime}>
            <span>Среднее время доставки*:</span>
            <b>00:24:19</b>
          </div>

          <span>Время работы: с 11:00 до 23:00</span>
          <div className={styles.account}>
            <AccountIcon />
            <span>Войти в аккаунт</span>
          </div>
        </div>
        <div className={styles.header}>
          <MainLogo />
          <BasketButton />
        </div>
      </div>
    </header>
  )
}

export default Header
