import { useMemo } from 'react'

import { useLatest } from './useLatest'
import { debounce } from '../utils/debounce'

export const useDebounce = (callback: Function, ms: number = 0) => {
  const callbackLatest = useLatest(callback)

  return useMemo(
    () =>
      debounce((...arg) => {
        callbackLatest.current(...arg)
      }, ms),
    [ms, callbackLatest],
  )
}
