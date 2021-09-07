import { RestaurantDirector } from '.';

describe('test mediator pattern', () => {
  test('should tell waiter when new table is seated', () => {
    const restaurantDirector = new RestaurantDirector();
    restaurantDirector.createEmployees();
    expect(restaurantDirector.host.spotsAvailable).toBe(15);
    expect(restaurantDirector.waiter.tablesServing).toBe(0);
    restaurantDirector.host.seatNewTable();
    expect(restaurantDirector.host.spotsAvailable).toBe(14);
    expect(restaurantDirector.waiter.tablesServing).toBe(1);
  });
});
