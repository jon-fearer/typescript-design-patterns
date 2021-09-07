export enum CHANGE_TYPE {
  SEATED_AT_BAR,
  LEFT_BAR,
  SEATED_AT_TABLE,
  LEFT_TABLE,
}

abstract class RestaurantEmployee {
  private _restaurantDirector: IRestaurantDirector;

  constructor(restaurantDirector: IRestaurantDirector) {
    this._restaurantDirector = restaurantDirector;
  }

  protected changed(changeType: CHANGE_TYPE): void {
    this._restaurantDirector.statusChanged(this, changeType);
  }
}

class Host extends RestaurantEmployee {
  private _spotsAvailable = 15;

  public get spotsAvailable(): number {
    return this._spotsAvailable;
  }

  public seatNewTable(): void {
    this._spotsAvailable--;
    this.changed(CHANGE_TYPE.SEATED_AT_TABLE);
  }

  public seatNewBarstool(): void {
    this._spotsAvailable--;
    this.changed(CHANGE_TYPE.SEATED_AT_BAR);
  }

  public newSpotAvailable(): void {
    this._spotsAvailable++;
  }
}

class Waiter extends RestaurantEmployee {
  private _tablesServing = 0;

  public get tablesServing(): number {
    return this._tablesServing;
  }

  public serveNewTable(): void {
    this._tablesServing++;
  }

  public tableLeft(): void {
    this._tablesServing--;
    this.changed(CHANGE_TYPE.LEFT_TABLE);
  }
}

class Bartender extends RestaurantEmployee {
  private _barstoolsServing = 0;

  public get barstoolsServing(): number {
    return this._barstoolsServing;
  }

  public serveNewBarstool(): void {
    this._barstoolsServing++;
  }

  public barStoolLeft(): void {
    this._barstoolsServing--;
    this.changed(CHANGE_TYPE.LEFT_BAR);
  }
}

interface IRestaurantDirector {
  statusChanged(restaurantEmployee: RestaurantEmployee, changeType: CHANGE_TYPE): void;
  createEmployees(): void;
}

export class RestaurantDirector implements IRestaurantDirector {
  private _host: Host;
  private _waiter: Waiter;
  private _bartender: Bartender;

  public statusChanged(restaurantEmployee: RestaurantEmployee, changeType: CHANGE_TYPE): void {
    switch (changeType) {
      case CHANGE_TYPE.SEATED_AT_BAR:
        this._bartender.serveNewBarstool();
        break;
      case CHANGE_TYPE.LEFT_BAR:
        this._host.newSpotAvailable();
        break;
      case CHANGE_TYPE.SEATED_AT_TABLE:
        this._waiter.serveNewTable();
        break;
      case CHANGE_TYPE.LEFT_TABLE:
        this._host.newSpotAvailable();
        break;
    }
  }

  public createEmployees() {
    this._host = new Host(this);
    this._waiter = new Waiter(this);
    this._bartender = new Bartender(this);
  }

  public get host(): Host {
    return this._host;
  }

  public get waiter(): Waiter {
    return this._waiter;
  }

  public get bartender(): Bartender {
    return this._bartender;
  }
}
