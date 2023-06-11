<template>
  <header>
    <nav-body :title="title">
      <template v-slot:buttons>
        <nav-button title="Pobierz filmy" @click-action="downloadMovies()" />
        <nav-button title="Dodaj film" @click-action="addMovie()" />
        <nav-button title="Aktualizuj dane" @click-action="updateMovies()" />
      </template>
    </nav-body>
  </header>
</template>

<script>
import { downloadMoviesApi, getAllMoviesApi } from "../../api/moviesApi";
// Components
import NavButton from "./NavButton.vue";
import NavBody from "./NavBody.vue";

export default {
  props: ["title"],
  inject: ["movies", "addMovieInTable"],
  methods: {
    async updateMovies() {
      this.clearTable(this.movies);
      const moviesFromSQL = await getAllMoviesApi();
      this.exportMoviesFromApiToTable(moviesFromSQL, this.movies);
    },
    async downloadMovies() {
      this.updateMovies();
      const downloadedMovies = await downloadMoviesApi();
      this.exportMoviesFromApiToTable(downloadedMovies, this.movies);
    },
    isMovieInTable(checkingMovieId, moviesInTable) {
      return moviesInTable.some(
        (movieInTable) => movieInTable.id === checkingMovieId
      );
    },
    exportMoviesFromApiToTable(moviesFromApi, moviesInTable) {
      moviesFromApi.forEach((movie) => {
        console.log(movie);
        if (!this.isMovieInTable(movie, moviesInTable))
          this.addMovieInTable({
            id: movie.id,
            title: movie.title,
            year: movie.year,
            extId: movie.extId,
            director: movie.director,
            rate: movie.rate,
          });
      });
    },
    clearTable(moviesInTable) {
      // Clear table
      moviesInTable.splice(0, this.movies.length);
    },
  },
  created() {
    // Pobranie z bazy danych listy filmów i wypełnienie tabeli
    this.updateMovies();
    console.log(this.movies);
  },
  components: {
    NavButton,
    NavBody,
  },
};
</script>

<style></style>
