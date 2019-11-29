// bitwise XOR
function solution(A) {
  return A.reduce((acc, i) => acc ^ i, 0)
}

module.exports = solution
