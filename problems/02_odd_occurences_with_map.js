function solution(A) {
  const numbers = new Map()
  A.forEach((number) => {
    if (numbers.has(number)) {
      numbers.set(number, numbers.get(number) + 1)
    } else {
      numbers.set(number, 1)
    }
  })

  for (let k of numbers.keys()) {
    if (numbers.get(k) % 2) {
      return k
    }
  }
}

module.exports = solution
