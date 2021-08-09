export class DogHouse {
  private _doors: string[] = [];
  private _windows: string[] = [];

  public addDoor(): void {
    this._doors.push('door');
  }

  public addWindow(): void {
    this._windows.push('window');
  }
}

interface IDogHouseBuilder {
  buildDogHouse(): void;
  buildDoor(): void;
  buildWindow(): void;
  getDogHouse(): DogHouse;
}

export class StandardDogHouseBuilder implements IDogHouseBuilder {
  private _dogHouse: DogHouse;

  public buildDogHouse(): void {
    this._dogHouse = new DogHouse();
  }

  public buildDoor(): void {
    this._dogHouse.addDoor();
  }

  public buildWindow(): void {
    this._dogHouse.addWindow();
  }

  public getDogHouse(): DogHouse {
    return this._dogHouse;
  }
}

export class DogHouseFactory {
  createDogHouse(dogHouseBuilder: IDogHouseBuilder): DogHouse {
    dogHouseBuilder.buildDogHouse();
    dogHouseBuilder.buildDoor();
    dogHouseBuilder.buildWindow();
    return dogHouseBuilder.getDogHouse();
  }
}
