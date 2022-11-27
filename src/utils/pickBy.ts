export const pickBy = (object, predicate = (v) => v) =>
  Object.fromEntries(Object.entries(object).filter(([, v]) => predicate(v)))
