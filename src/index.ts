class Movie {
  constructor(
    public title: string,
    public director: string,
    public releaseDate: Date
  ) {}

  getDetails(): string {
    return `${this.title} by ${this.director} on ${this.releaseDate}`;
  }

  setDirector(director: string): void {
    this.director = director;
  }

  isDirectedBy(director: string): boolean {
    return this.director === director;
  }
}

class MovieCollection {
  private movies: Movie[] = [];

  addMovie(movie: Movie): void {
    this.movies.push(movie);
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  removeMovie(movie: Movie): void {
    const index = this.movies.indexOf(movie);
    if (index > -1) {
      this.movies.splice(index, 1);
    }
  }

  getMovieByTitle(title: string): Movie | undefined {
    return this.movies.find((movie) => movie.title === title);
  }

  getMoviesByDirector(director: string): Movie[] {
    return this.movies.filter((movie) => movie.isDirectedBy(director));
  }
}
