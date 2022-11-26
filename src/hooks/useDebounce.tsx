import { useMemo } from 'react'
import { debounce } from '../utils/debounce'
import { useLatest } from './useLatest'

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
