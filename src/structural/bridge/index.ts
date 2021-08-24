interface IBookReader {
  read(): string;
}

interface IBookReciter {
  recite(): string;
}

export class BookReader implements IBookReader {
  private _bookReciter: IBookReciter;

  constructor(bookReciter: IBookReciter) {
    this._bookReciter = bookReciter;
  }

  public read() {
    return this._bookReciter.recite();
  }
}

export class EnglishBookReciter implements IBookReciter {
  public recite() {
    return 'Once upon a time...';
  }
}

export class ChineseBookReciter implements IBookReciter {
  public recite() {
    return '从前...';
  }
}
