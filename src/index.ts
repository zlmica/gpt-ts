class Movie {
  constructor(
    public title: string,
    public director: string,
    public releaseDate: Date
  ) {}

  getDetails() {
    return `${this.title} by ${this.director} on ${this.releaseDate}`;
  }

  setDirector(director: string) {
    this.director = director;
  }

  isDirectedBy(director: string) {
    return this.director === director;
  }
}
