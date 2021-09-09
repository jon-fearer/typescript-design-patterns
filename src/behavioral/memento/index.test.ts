import { Car, COLOR, RIM_TYPE } from '.';

describe('test memento pattern', () => {
  test('should reset car rims and color using memento', () => {
    const car = new Car();
    car.addRims(RIM_TYPE.STOCK);
    car.paintCar(COLOR.BLUE);
    expect(car.rimType).toBe(RIM_TYPE.STOCK);
    expect(car.color).toBe(COLOR.BLUE);
    const carMemento = car.createMemento();
    car.addRims(RIM_TYPE.CHROME);
    car.paintCar(COLOR.RED);
    expect(car.rimType).toBe(RIM_TYPE.CHROME);
    expect(car.color).toBe(COLOR.RED);
    car.setMemento(carMemento);
    expect(car.rimType).toBe(RIM_TYPE.STOCK);
    expect(car.color).toBe(COLOR.BLUE);
  });
});
