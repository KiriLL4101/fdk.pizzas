import React from 'react'

import PizzaLogoIcon from 'icon:../../assets/icons/pizza-logo.svg'
import LocationIcon from 'icon:../../assets/icons/location.svg'
import FacebookIcon from 'icon:../../assets/icons/facebook.svg'
import PhoneIcon from 'icon:../../assets/icons/phone.svg'
import InstagramIcon from 'icon:../../assets/icons/instagram.svg'

import * as styles from './Footer.module.scss'

const about = ['О компании', 'Пользовательское соглашение', 'Условия гарантии']

const help = ['Ресторан', 'Контакты', 'Поддержка', 'Отследить заказ']

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.root}>
          <div>
            <div className={styles.logo}>
              <PizzaLogoIcon />
              <span>Куда пицца</span>
            </div>
            <span>© Copyright 2021 — Куда Пицца</span>
          </div>
          <div>
            <h5 className={styles.title}>Куда пицца</h5>
            <ul className={styles.list}>
              {about.map((text, idx) => (
                <li key={idx}>{text}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className={styles.title}>Помощь</h5>
            <ul className={styles.list}>
              {help.map((text, idx) => (
                <li key={idx}>{text}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className={styles.title}>Контакты</h5>
            <div className={styles.contact}>
              <PhoneIcon />
              <span>+7 (926) 223-10-11</span>
            </div>
            <div className={styles.contact}>
              <LocationIcon />
              <span>Москва, ул. Юных Ленинцев, д.99</span>
            </div>
            <div className={styles.contact}>
              <FacebookIcon />
              <span>Facebook</span>
            </div>
            <div className={styles.contact}>
              <InstagramIcon />
              <span>Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
