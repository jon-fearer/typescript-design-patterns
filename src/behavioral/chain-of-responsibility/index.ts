abstract class RestaurantEmployee {
  private readonly _successor: RestaurantEmployee;
  private readonly _menuItems: string[];

  constructor(successor: RestaurantEmployee = null, menuItems: string[] = []) {
    this._successor = successor;
    this._menuItems = menuItems;
  }

  protected serveCustomer(order: string): string {
    if (this._successor) {
      return this._successor.serveCustomer(order);
    }
  }

  protected canServeCustomer(order: string): boolean {
    return this._menuItems.includes(order);
  }
}

export class RestaurantOwner extends RestaurantEmployee {
  public serveCustomer(): string {
    throw new Error('we don\'t have that');
  }
}

export class Bartender extends RestaurantEmployee {
  public serveCustomer(order: string): string {
    if (this.canServeCustomer(order)) {
      return order;
    } else {
      return super.serveCustomer(order);
    }
  }
}

export class Waiter extends RestaurantEmployee {
  public serveCustomer(order: string): string {
    if (this.canServeCustomer(order)) {
      return order;
    } else {
      return super.serveCustomer(order);
    }
  }
}
