import { DbReader, FakeDatabase, FakeDatabaseCacheProxy } from '.';

describe('test proxy pattern', () => {
  let readDataSpy: jest.SpyInstance;
  const dbReader = new DbReader();

  beforeAll(() => {
    readDataSpy = jest.spyOn(dbReader, 'readData');
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('fake database should call db reader every time', () => {
    const fakeDatabase = new FakeDatabase(dbReader);
    const result1 = fakeDatabase.getData();
    const result2 = fakeDatabase.getData();
    expect(readDataSpy).toHaveBeenCalledTimes(2);
    expect(result1).toStrictEqual(result2);
  });

  test('fake database proxy should use a cache', () => {
    const fakeDatabase = new FakeDatabaseCacheProxy(dbReader);
    const result1 = fakeDatabase.getData();
    const result2 = fakeDatabase.getData();
    expect(readDataSpy).toHaveBeenCalledTimes(1);
    expect(result1).toStrictEqual(result2);
  });
});
