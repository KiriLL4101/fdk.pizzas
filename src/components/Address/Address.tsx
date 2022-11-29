import React from 'react'

import { Button } from '../../common/Button/Button'
import { Field } from '../../common/Field/Field'

import * as styles from './Address.module.scss'

const Address = () => {
  return (
    <div className={styles.root}>
      <span>Проверить адрес доставки</span>
      <Field type="text" placeholder="Адрес" />
      <Button>Проверить</Button>
    </div>
  )
}

export default Address
