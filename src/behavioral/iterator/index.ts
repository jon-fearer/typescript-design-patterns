interface IIterator<T> {
  first(): void;
  next(): void;
  isDone(): boolean;
  currentItem(): T;
}

class SomeCollectionIterator<T> implements IIterator<T> {
  private readonly _someCollection: SomeCollection<T>;
  private _current = 0;

  constructor(someCollection: SomeCollection<T>) {
    this._someCollection = someCollection;
  }

  public first(): void {
    this._current = 0;
  }

  public next(): void {
    this._current++;
  }

  public isDone(): boolean {
    return this._current >= this._someCollection.count();
  }

  public currentItem(): T {
    return this._someCollection.get(this._current);
  }
}

interface IAggregate<T> {
  createIterator(): IIterator<T>;
}

export class SomeCollection<T> implements IAggregate<T> {
  private readonly _size: number;
  private readonly _list: T[];

  constructor(data?: T[], size = 10) {
    if (data && data.length) {
      this._size = data.length;
      this._list = data;
    } else {
      this._size = size;
      this._list = Array(size);
    }
  }

  public get(index: number): T {
    if (index < 0 || index >= this._size) {
      throw new Error('index out of bounds');
    }
    return this._list[index];
  }

  public set(item: T, index: number): void {
    if (index < 0 || index >= this._size) {
      throw new Error('index out of bounds');
    }
    this._list[index] = item;
  }

  public count(): number {
    return this._size;
  }

  public append(item: T): void {
    this._list[this._size - 1] = item;
  }

  public prepend(item: T): void {
    this._list[0] = item;
  }

  public createIterator(): IIterator<T> {
    return new SomeCollectionIterator(this);
  }
}
