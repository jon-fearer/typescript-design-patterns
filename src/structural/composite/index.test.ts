import { Beer, Hop, Water, Yeast } from '.';

describe('test composite pattern', () => {
  test('leaves and composites all implement the consume method', () => {
    expect(new Beer().consume()).toBe('yum');
    expect(new Hop().consume()).toBe('gross');
    expect(new Yeast().consume()).toBe('gross');
    expect(new Water().consume()).toBe('ok');
  });

  test('composite implements the add method', () => {
    expect(new Beer().add(new Hop())).toBeUndefined();
  });
});
