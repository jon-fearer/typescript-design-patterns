interface IFakeDatabase {
  getData(): string;
}

export class DbReader {
  public readData(): string {
    return 'this is some data from the database';
  }
}

export class FakeDatabase implements IFakeDatabase {
  private _dbReader: DbReader;

  constructor(dbReader: DbReader) {
    this._dbReader = dbReader;
  }

  public getData(): string {
    return this._dbReader.readData();
  }
}

export class FakeDatabaseCacheProxy implements IFakeDatabase {
  private _dbReader: DbReader;
  private _data: string;

  constructor(dbReader: DbReader) {
    this._dbReader = dbReader;
  }

  public getData(): string {
    if (!this._data) {
      this._data = this._dbReader.readData();
    }
    return this._data;
  }
}
