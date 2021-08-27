interface ICityItem {}

type Direction = 'north'|'south'|'east'|'west';

class Road implements ICityItem {
  private _direction: Direction; // intrinsic state

  constructor(direction: Direction) {
    this._direction = direction;
  }
}

type CarType = 'sedan'|'coupe'|'van'|'truck';

class Car implements ICityItem {
  private _carType: CarType; // intrinsic state

  constructor(carType: CarType) {
    this._carType = carType;
  }
}

export class CityItemFactory {
  private _cars: Map<CarType, Car> = new Map();

  public createRoad(direction: Direction): Road {
    return new Road(direction);
  }

  public createCar(carType: CarType): Car {
    let car = this._cars.get(carType);
    if (car) {
      return car;
    } else {
      car = new Car(carType);
      this._cars.set(carType, car);
      return car;
    }
  }
}

export class CityItemContext {
  private _carSpeeds: Map<number, number> = new Map(); // extrinsic state

  public setCarSpeed(carId: number, carSpeed: number): void {
    this._carSpeeds.set(carId, carSpeed);
  }

  public getCarSpeed(carId: number): number {
    return this._carSpeeds.get(carId);
  }
}
