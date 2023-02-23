import NumericInput from '../../common/NumericInput/NumericInput'
import BasketSideItem from '../../components/BasketSide/BasketSideItem'
import { useAppSelector } from '../../hooks/redux'
import { groupBy } from '../../utils/groupBy'

import * as styles from './OrderForm.module.scss'

export const OrderForm = () => {
  const { items } = useAppSelector((state) => state.basket)

  return (
    <div className={styles.root}>
      <h1>Ваш заказ</h1>
      <div className={styles.wrapper}>
        {items.length > 0 &&
          Object.entries(groupBy(items, 'id')).map(([id, pizza]) => {
            const priceSum = pizza.reduce((sum, val) => (sum += val.price), 0)

            return <BasketSideItem key={id} counter={pizza.length} price={priceSum} {...pizza[0]} />

            return (
              <div key={id} className={styles.item}>
                <img src={pizza[0].imageUrl} alt="Pizza" />

                <div className={styles.info}>
                  <h6>{pizza[0].title}</h6>
                  <p>Традиционное тесто, 23 см</p>
                  <div>
                    <NumericInput counter={pizza.length} />
                    <span>{priceSum} ₽</span>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
