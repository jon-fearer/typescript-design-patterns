interface ICarPart {}
class Engine implements ICarPart {}
class Body implements ICarPart {}
class Wheel implements ICarPart {}
// etc...

export class Car {
  private _parts: ICarPart[] = [];

  public addPart(part: ICarPart): void {
    this._parts.push(part);
  }

  public get parts(): ICarPart[] {
    return this._parts;
  }
}

export class CarBuilderFacade {
  public buildCar(): Car {
    const car = new Car();
    car.addPart(new Engine());
    car.addPart(new Body());
    car.addPart(new Wheel());
    return car;
  }
}
