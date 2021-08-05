class Movie {
  private _length: number;

  constructor(length: number) {
    this._length = length;
  }

  public get length(): number {
    return this._length;
  }
}

export class MovieFactory {
  public makeMovie() {
    return new Movie(120);
  }
}

export class LongMovieFactory extends MovieFactory {
  public makeMovie() {
    return new Movie(180);
  }
}

export class Studio {
  public produceMovie(movieFactory: MovieFactory) {
    return movieFactory.makeMovie();
  }
}
