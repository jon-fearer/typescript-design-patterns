import { BookReader, EnglishBookReciter, ChineseBookReciter } from '.';

describe('test bridge pattern', () => {
  test('should read from the english book', () => {
    const englishBookReciter = new EnglishBookReciter();
    const bookReader = new BookReader(englishBookReciter);
    expect(bookReader.read()).toBe('Once upon a time...');
  });

  test('should read from the chinese book', () => {
    const chineseBookReciter = new ChineseBookReciter();
    const bookReader = new BookReader(chineseBookReciter);
    expect(bookReader.read()).toBe('从前...');
  });
});
