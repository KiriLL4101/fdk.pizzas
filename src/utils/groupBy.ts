export const groupBy = function <T>(xs: T[], key): Record<string, T[]> {
  return xs.reduce(function (rv, x) {
    ;(rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}
