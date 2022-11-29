import { useMemo } from 'react'

import { useLatest } from './useLatest'
import { debounce } from '../utils/debounce'

type UseDebounce = <T extends (...args: any) => void>(
  callback: T,
  ms: number,
) => (...args: Parameters<T>) => void

export const useDebounce: UseDebounce = (callback, ms = 0) => {
  const callbackLatest = useLatest(callback)

  return useMemo(
    () =>
      debounce((...arg) => {
        callbackLatest.current(...arg)
      }, ms),
    [ms, callbackLatest],
  )
}
