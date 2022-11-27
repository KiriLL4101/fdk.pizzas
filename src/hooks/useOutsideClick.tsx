import { MutableRefObject, useEffect } from 'react'
import { useLatest } from './useLatest'

export const useOutsideClick = (
  elementRef: MutableRefObject<any>,
  handler: Function,
  attached = true,
) => {
  const latestHandler = useLatest(handler)

  useEffect(() => {
    if (!attached) return

    const handleClick = (e) => {
      if (!elementRef.current) return
      if (!elementRef.current.contains(e.target)) {
        latestHandler.current()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [elementRef, latestHandler, attached])
}
