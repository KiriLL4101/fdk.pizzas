import React, { useRef, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { selectFilter, setSort, Sort, SortPropertyEnum } from '../redux/slices/filters'
import { useOutsideClick } from '../hooks/useOutsideClick'

import ArrowTopIcon from 'icon:../assets/img/arrow-top.svg'

type SortItem = {
  name: string
  sortProperty: SortPropertyEnum
}

export const sortList: SortItem[] = [
  { name: 'популярности (DESC)', sortProperty: SortPropertyEnum.RATING_DESC },
  { name: 'популярности (ASC)', sortProperty: SortPropertyEnum.RATING_ASC },
  { name: 'цене (DESC)', sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: 'цене (ASC)', sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: 'алфавиту (DESC)', sortProperty: SortPropertyEnum.TITLE_DESC },
  { name: 'алфавиту (ASC)', sortProperty: SortPropertyEnum.TITLE_ASC },
]

const Sort: React.FC = () => {
  const { sort } = useAppSelector(selectFilter)
  const dispatch = useAppDispatch()

  const [opened, setOpened] = useState<boolean>(false)

  const sortRef = useRef<HTMLDivElement>(null)

  useOutsideClick(sortRef, () => setOpened(false), opened)

  const onChangeSort = (obj: SortItem) => {
    dispatch(setSort(obj))
    setOpened(false)
  }

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <ArrowTopIcon />
        <b>Сортировка по:</b>
        <span onClick={() => setOpened((prev) => !prev)}>{sort.name}</span>
      </div>
      {opened && (
        <div className="sort__popup">
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => onChangeSort(obj)}
                className={sort.sortProperty === obj.sortProperty ? 'active' : ''}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Sort
