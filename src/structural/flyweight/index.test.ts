import { CityItemContext, CityItemFactory } from '.';

describe('test flyweight pattern', () => {
  test('should reuse car objects if same type', () => {
    const cityItemFactory = new CityItemFactory();
    const context = new CityItemContext();
    const firstTruck = cityItemFactory.createCar('truck');
    const firstTruckId = 1;
    context.setCarSpeed(firstTruckId, 25);
    const secondTruck = cityItemFactory.createCar('truck');
    const secondTruckId = 2;
    context.setCarSpeed(secondTruckId, 45);
    const sedan = cityItemFactory.createCar('sedan');
    expect(firstTruck).toBe(secondTruck);
    expect(firstTruck).not.toBe(sedan);
    expect(context.getCarSpeed(firstTruckId)).not.toEqual(context.getCarSpeed(secondTruckId));
  });

  test('should always create new road objects', () => {
    const cityItemFactory = new CityItemFactory();
    const firstRoad = cityItemFactory.createRoad('north');
    const secondRoad = cityItemFactory.createRoad('north');
    expect(firstRoad).not.toBe(secondRoad);
  });
});
