interface IConsumable {
  consume(): string;
  add?(consumable: IConsumable): void;
}

export class Beer implements IConsumable {
  private _ingredients: IConsumable[] = [];

  public consume() {
    return 'yum';
  }

  public add(ingredient: IConsumable): void {
    this._ingredients.push(ingredient);
  }
}

export class Hop implements IConsumable {
  public consume() {
    return 'gross';
  }
}

export class Water implements IConsumable {
  public consume() {
    return 'ok';
  }
}

export class Yeast implements IConsumable {
  public consume() {
    return 'gross';
  }
}
