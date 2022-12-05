import React, { useEffect, useRef, useState } from 'react'

import MainLogo from './MainLogo'
import { BasketButton } from '../BasketButton/BasketButton'
import Categories from '../Categories/Categories'

import ArrowDownIcon from 'icon:../../assets/icons/arrow-down.svg'
import LocationIcon from 'icon:../../assets/icons/location.svg'
import AccountIcon from 'icon:../../assets/icons/account.svg'

import * as styles from './Header.module.scss'

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    if (!headerRef.current) return

    const scrollDocument = (e) => {
      const headerOffset = headerRef.current.getBoundingClientRect().top
      const scrolled = e.target.documentElement.scrollTop

      if (scrolled > headerOffset + 40) {
        headerRef.current.classList.add('fixed')
        e.target.documentElement.classList.add('relative')
        setIsVisible(true)
      } else {
        headerRef.current.classList.remove('fixed')
        e.target.documentElement.classList.remove('relative')
        setIsVisible(false)
      }
    }

    document.addEventListener('scroll', scrollDocument)

    return () => {
      document.removeEventListener('scroll', scrollDocument)
    }
  }, [])

  return (
    <header className={styles.root}>
      <div className="container">
        <div className={`${styles.subheader} mb`}>
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
        <div ref={headerRef} className={styles.header}>
          <div className={`${styles.inner} container`}>
            <MainLogo />
            {isVisible && <Categories inline />}
            <BasketButton />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
