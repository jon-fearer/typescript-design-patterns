import { SomeCollection } from '.';

describe('test iterator pattern', () => {
  test('should iterate through list of numbers', () => {
    const someCollection = new SomeCollection<number>([1, 2, 3]);
    const someCollectionIterator = someCollection.createIterator();
    expect(someCollectionIterator.currentItem()).toBe(1);
    expect(someCollectionIterator.isDone()).toBe(false);
    someCollectionIterator.next();
    expect(someCollectionIterator.currentItem()).toBe(2);
    expect(someCollectionIterator.isDone()).toBe(false);
    someCollectionIterator.next();
    expect(someCollectionIterator.currentItem()).toBe(3);
    expect(someCollectionIterator.isDone()).toBe(false);
    someCollectionIterator.next();
    expect(someCollectionIterator.isDone()).toBe(true);
    someCollectionIterator.first();
    expect(someCollectionIterator.currentItem()).toBe(1);
    expect(someCollectionIterator.isDone()).toBe(false);
  });
});
