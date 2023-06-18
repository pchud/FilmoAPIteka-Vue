export default class Movies {
  constructor() {
    this.movies = [];
  }
  addMovie(newMovie) {
    this.movies.push(newMovie);
  }
  deleteMovie(movieId) {
    const movieIndex = this.movies.findIndex((movie) => movie.id === movieId);
    this.movies.splice(movieIndex, 1);
  }
  editMovie(editMovie) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.id === editMovie.id
    );
    if (movieIndex !== 1) this.movies[movieIndex] = editMovie;
  }
  clearMovies() {
    this.movies.splice(0, this.movies.length);
  }
}
