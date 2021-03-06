import { ChocolateChipCookieBaker } from '.';

describe('test factory method pattern', () => {
  it('should create a chocolate chip cookie baker', () => {
    const chocolateChipCookieBaker = new ChocolateChipCookieBaker();
    const chocolateChipCookie = chocolateChipCookieBaker.bakeFoodItem();
    expect(chocolateChipCookie.constructor.name).toBe('ChocolateChipCookie');
  });
});
