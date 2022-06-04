const getOddOccurrenceWithMap = require('../problems/02_02_odd_occurrences_with_map')
const getOddOccurrenceXOR = require('../problems/02_02_odd_occurrences_xor')

describe('02 Odd occurences in array -- map solution', () => {
  it('should return the value of the unpaired element', () => {
    expect(getOddOccurrenceWithMap([9, 3, 9, 3, 9, 7, 9])).toBe(7)
    expect(getOddOccurrenceXOR([9, 3, 9, 3, 9, 7, 9])).toBe(7)
  })
})