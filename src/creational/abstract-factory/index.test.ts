import { MovieFactory, LongMovieFactory, Studio } from '.';

describe('test abstract factory', () => {
  test('should create movie with movie factory', () => {
    const movieFactory = new MovieFactory();
    const studio = new Studio();
    const movie = studio.produceMovie(movieFactory);
    expect(movie.length).toBe(120);
  });

  test('should create movie with long movie factory', () => {
    const movieFactory = new LongMovieFactory();
    const studio = new Studio();
    const movie = studio.produceMovie(movieFactory);
    expect(movie.length).toBe(180);
  });
});
