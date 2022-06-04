/**
 * 
 * @param {[number]} A array of numbers
 * @returns {number} missing number
 */
function solution(A) {
  const n = A.length + 1;
  const sum = n * (n + 1) / 2;
  const missing_sum = A.reduce((acc, curr) => acc + curr, 0);

  return sum - missing_sum;
}

module.exports = solution;
