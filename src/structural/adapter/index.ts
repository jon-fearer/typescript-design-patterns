export class BookReciter {
  public recite() {
    return 'Once upon a time...';
  }
}

interface IReader {
  read(): string;
}

export class BookReaderAdapter implements IReader {
  private _bookReciter: BookReciter;

  constructor(bookReciter: BookReciter) {
    this._bookReciter = bookReciter;
  }

  public read() {
    return this._bookReciter.recite();
  }
}
