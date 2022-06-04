const frogJump =  require('../problems/03_01_frog_jump');

describe('03-01: Frog jump', () => {
  test('should return the number of jumps', () => {
    expect(frogJump(10, 85, 30)).toBe(3);
  });
});
