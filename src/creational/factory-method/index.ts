abstract class FoodItem {}

abstract class Baker {
  public abstract bakeFoodItem(): FoodItem;
}

class ChocolateChipCookie extends FoodItem {}

export class ChocolateChipCookieBaker extends Baker {
  public bakeFoodItem() {
    return new ChocolateChipCookie();
  }
}
