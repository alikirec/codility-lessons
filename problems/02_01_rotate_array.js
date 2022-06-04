function solution(A, K) {
  K = K % A.length;
  if (K === 0) return A;

  return A.slice(-K).concat(A.slice(0, A.length - K));
}

module.exports = solution
