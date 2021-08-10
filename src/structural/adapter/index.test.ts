import { BookReciter, BookReaderAdapter } from '.';

describe('test adapter pattern', () => {
  test('should read from the book', () => {
    const bookReciter = new BookReciter();
    const bookReaderAdapter = new BookReaderAdapter(bookReciter);
    expect(bookReaderAdapter.read()).toBe('Once upon a time...');
  });
});
