function solution(N) {

  // reach the first 1
  while (N % 2 === 0 && N > 0) {
    N = Math.floor(N / 2);
  }
  N = Math.floor(N / 2);

  let max = 0, current = 0;

  while (N > 0) {
    // sequence of 0s
    while (N % 2 === 0) {
      current ++;
      N = Math.floor(N / 2);
    }

    max = Math.max(current, max);
    current = 0;
    N = Math.floor(N / 2);
  }

  return max;
}

module.exports = solution;
