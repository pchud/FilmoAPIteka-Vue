import ErrorMessages from "./ErrorMessages";
import {
  getAllMoviesApi,
  downloadMoviesApi,
  addMovieApi,
  updateMovieApi,
} from "@/api/moviesApi";

export default class Movies {
  constructor() {
    this.isProcessing = false;
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

  // TEST FUNCTIONS - Nav Header
  isMovieInTable(checkMovieId) {
    return this.movies.some((movie) => movie.id === checkMovieId);
  }

  exportMoviesApiToTable(moviesFromApi) {
    try {
      moviesFromApi.forEach((movie) => {
        if (!this.isMovieInTable(movie))
          this.addMovie({
            id: movie.id,
            extId: movie.extId,
            title: movie.title,
            year: movie.year,
            director: movie.director,
            rate: movie.rate,
          });
      });
    } catch (error) {
      ErrorMessages.push(error.message);
    }
  }
  async updateMovies() {
    if (this.isProcessing) return;
    try {
      this.isProcessing = true;
      this.clearMovies();
      const moviesFromSQL = await getAllMoviesApi();
      this.exportMoviesApiToTable(moviesFromSQL);
    } catch (error) {
      ErrorMessages.push(error.message);
    } finally {
      this.isProcessing = false;
    }
  }

  async downloadMovies() {
    if (this.isProcessing) return;
    await this.updateMovies();

    try {
      this.isProcessing = true;
      const downloadedMovies = await downloadMoviesApi();
      this.exportMoviesApiToTable(downloadedMovies);
    } catch (error) {
      ErrorMessages.push(error.message);
    } finally {
      this.isProcessing = false;
    }
  }
}
