import { NameVisitor, Dog, Human } from '.';

describe('test visitor pattern', () => {
  test('should get name from dog', () => {
    const name = 'Santa\'s Little Helper';
    const dog = new Dog(name);
    const visitor = new NameVisitor();
    expect(dog.accept(visitor)).toBe(name);
  });

  test('should get name from human', () => {
    const firstName = 'Homer';
    const lastName = 'Simpson';
    const human = new Human(firstName, lastName);
    const visitor = new NameVisitor();
    expect(human.accept(visitor)).toBe(`${firstName} ${lastName}`);
  });
});
