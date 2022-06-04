const missingEl =  require('../problems/03_02_perm_missing_el');

describe('03-02: Array missing element', () => {
  test('should return the missing element', () => {
    expect(missingEl([2, 3, 1, 5])).toBe(4);
  });
});
