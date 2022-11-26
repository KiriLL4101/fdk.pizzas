export const debounce = (fn: Function, ms: number = 0) => {
  let timeout

  return function (...arg) {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      fn.apply(this, arg)
    }, ms)
  }
}
