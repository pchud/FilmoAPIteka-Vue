<template>
  <header>
    <nav-body :title="title">
      <nav-button title="Pobierz filmy" @click-action="downloadMovies()" />
      <nav-button
        title="Dodaj film"
        @click="showMessageWindow('addMovieTrigger')"
      />
      <nav-button title="Aktualizuj dane" @click-action="updateMovies()" />
      <nav-button
        title="Sprawdź listę błędów"
        @click="showMessageWindow('errorsTrigger')"
      />
    </nav-body>
  </header>
</template>

<script>
// Components
import NavButton from "./NavButton.vue";
import NavBody from "./NavBody.vue";
// API Functions
import { downloadMoviesApi, getAllMoviesApi } from "../../api/moviesApi";

export default {
  components: {
    NavButton,
    NavBody,
  },
  props: ["title"],
  inject: ["movies", "addMovieInTable", "messages", "showMessageWindow"],
  methods: {
    async updateMovies() {
      try {
        this.clearTable(this.movies);
        const moviesFromSQL = await getAllMoviesApi();
        this.exportMoviesFromApiToTable(moviesFromSQL, this.movies);
      } catch (error) {
        console.log(error.message);
        this.messages.push([error.message]);
      }
    },
    async downloadMovies() {
      try {
        this.updateMovies();
        const downloadedMovies = await downloadMoviesApi();
        this.exportMoviesFromApiToTable(downloadedMovies, this.movies);
      } catch (error) {
        console.log(error.message);
        this.messages.push([error.message]);
      }
    },
    isMovieInTable(checkingMovieId, moviesInTable) {
      return moviesInTable.some(
        (movieInTable) => movieInTable.id === checkingMovieId
      );
    },
    exportMoviesFromApiToTable(moviesFromApi, moviesInTable) {
      try {
        moviesFromApi.forEach((movie) => {
          if (!this.isMovieInTable(movie, moviesInTable))
            this.addMovieInTable({
              id: movie.id,
              extId: movie.extId,
              title: movie.title,
              year: movie.year,
              director: movie.director,
              rate: movie.rate,
            });
        });
      } catch (error) {
        console.log(error.message);
        this.messages.push([error.message]);
      }
    },
    clearTable(moviesInTable) {
      moviesInTable.splice(0, this.movies.length);
    },
  },
  created() {
    // Pobranie z bazy danych listy filmów i wypełnienie tabeli
    this.updateMovies();
  },
};
</script>

<style></style>
