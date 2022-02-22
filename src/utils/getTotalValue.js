export function getTotalValue(array, sumKey) {
  return array.reduce((acc, e) => {
    acc += Number(e[sumKey])
    return acc
  }, 0)
}
