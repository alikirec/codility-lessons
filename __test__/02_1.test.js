const getOddOccurenceWithMap = require('../problems/02_odd_occurences_with_map')
const getOddOccurenceXOR = require('../problems/02_odd_occurences_xor')

describe('02 Odd occurences in array -- map solution', () => {
  it('should return the value of the unpaired element', () => {
    expect(getOddOccurenceWithMap([9, 3, 9, 3, 9, 7, 9])).toBe(7)
    expect(getOddOccurenceXOR([9, 3, 9, 3, 9, 7, 9])).toBe(7)
  })
})