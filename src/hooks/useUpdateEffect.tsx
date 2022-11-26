import { useEffect, useRef } from 'react'

const useUpdateEffect: typeof useEffect = (effect, deps) => {
  const isFirst = useRef(true)

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      return
    }

    return effect()
  }, deps)
}

export default useUpdateEffect
