import React, { useRef } from 'react'

import { useDebounce } from '../../hooks/useDebounce'
import { useAppDispatch } from '../../hooks/redux'
import { setSearch } from '../../redux/slices/filterSlice'

import SearchIcon from 'icon:../../assets/img/search.svg'
import RemoveIcon from 'icon:../../assets/img/remove.svg'

import * as styles from './Search.module.scss'

const Search: React.FC = () => {
  const [value, setValue] = React.useState<string>('')

  const dispatch = useAppDispatch()

  const setSearchDebounce = useDebounce((value) => dispatch(setSearch(value)), 200)

  const inputRef = useRef(null)

  const onClickClear = () => {
    setValue('')
    setSearchDebounce('')
    inputRef.current?.focus()
  }

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    setSearchDebounce(event.target.value)
  }

  return (
    <div className={styles.root}>
      <SearchIcon className={styles.icon} />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {value && <RemoveIcon onClick={onClickClear} className={styles.clearIcon} />}
    </div>
  )
}

export default Search
