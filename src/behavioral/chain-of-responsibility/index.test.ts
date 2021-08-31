import { RestaurantOwner, Bartender, Waiter } from '.';

describe('test chain of responsibility pattern', () => {
  let waiter: Waiter;

  beforeAll(() => {
    const restaurantOwner = new RestaurantOwner();
    const bartender = new Bartender(restaurantOwner, ['beer', 'wine']);
    waiter = new Waiter(bartender, ['burger', 'steak']);
  });

  test('waiter should serve the burger', () => {
    const order = 'burger';
    const result = waiter.serveCustomer(order);
    expect(result).toStrictEqual(order);
  });

  test('bartender should serve the beer', () => {
    const order = 'beer';
    const result = waiter.serveCustomer(order);
    expect(result).toStrictEqual(order);
  });

  test('restaurant owner says they don\'t have caviar', () => {
    const order = 'caviar';
    expect(() => waiter.serveCustomer(order)).toThrow();
  });
});
