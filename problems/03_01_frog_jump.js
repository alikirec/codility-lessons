/**
 * 
 * @param {number} x starting point
 * @param {number} y target point
 * @param {number} d maximum distance the frog can jump
 */
function solution(x, y, d) {
  return Math.ceil((y - x) / d);
}

module.exports = solution;
