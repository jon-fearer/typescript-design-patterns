import { StandardDogHouseBuilder, DogHouseFactory } from '.';

describe('test build pattern', () => {
  test('should build a standard dog house', () => {
    const standardDogHouseBuilder = new StandardDogHouseBuilder();
    const dogHouseFactory = new DogHouseFactory();
    const dogHouse = dogHouseFactory.createDogHouse(standardDogHouseBuilder);
    expect(dogHouse.constructor.name).toBe('DogHouse');
  });
});
