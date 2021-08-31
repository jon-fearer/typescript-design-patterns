import { Dog, Cat, SimpleCommand } from '.';

describe('test command pattern', () => {
  let consoleSpy: jest.SpyInstance;

  beforeAll(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('dog should woof', () => {
    const dog = new Dog();
    const simpleCommand = new SimpleCommand(dog);
    simpleCommand.execute();
    expect(consoleSpy).toHaveBeenCalledWith('woof');
  });

  test('cat should meow', () => {
    const cat = new Cat();
    const simpleCommand = new SimpleCommand(cat);
    simpleCommand.execute();
    expect(consoleSpy).toHaveBeenCalledWith('meow');
  });
});
