const rotateArray = require('../problems/03_rotate_array')

describe('03 Cyclic rotation', () => {
  it('should return the array A rotated K times', () => {
    expect(rotateArray([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8])
    expect(rotateArray([0, 0, 0], 1)).toEqual([0, 0, 0])
    expect(rotateArray([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4])
  })
})