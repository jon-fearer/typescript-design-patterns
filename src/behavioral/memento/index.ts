export enum RIM_TYPE {
  STOCK,
  CHROME,
}

export enum COLOR {
  RED,
  BLUE,
}

export class Car {
  private _rimType: RIM_TYPE;
  private _color: COLOR;

  public addRims(rimType: RIM_TYPE): void {
    this._rimType = rimType;
  }

  public get rimType(): RIM_TYPE {
    return this._rimType;
  }

  public paintCar(color: COLOR): void {
    this._color = color;
  }

  public get color(): COLOR {
    return this._color;
  }

  public createMemento(): CarMemento {
    const carMemento = new CarMemento();
    carMemento.setState({ rimType: this._rimType, color: this._color });
    return carMemento;
  }

  public setMemento(carMemento: CarMemento): void {
    const carState = carMemento.getState();
    this._rimType = carState.rimType;
    this._color = carState.color;
  }
}

interface ICarState {
  rimType: RIM_TYPE;
  color: COLOR;
}

class CarMemento {
  private _rimType: RIM_TYPE;
  private _color: COLOR;

  public getState(): ICarState {
    return { rimType: this._rimType, color: this._color };
  }

  public setState(carState: ICarState): void {
    this._rimType = carState.rimType;
    this._color = carState.color;
  }
}
