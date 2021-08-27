import { CarBuilderFacade } from '.';

describe('test facade pattern', () => {
  test('should build a car with parts', () => {
    const car = new CarBuilderFacade().buildCar();
    expect(car.parts.length).toBeGreaterThan(0);
  });
});
