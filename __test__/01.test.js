const longestBinaryGap = require('../problems/01_01_longest_binary_gap')

describe('01 Binary Gap', () => {
  it('should return 0 if there is no gap', () => {
    expect(longestBinaryGap(0)).toBe(0)
    expect(longestBinaryGap(32)).toBe(0)
  })

  it('should return the longest binary gap', () => {
    expect(longestBinaryGap(9)).toBe(2) // 1001
    expect(longestBinaryGap(1041)).toBe(5) // 10000010001
  })
})
