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
  data() {
    return {
      isProcessing: false,
    };
  },
  inject: ["movies", "messages", "showMessageWindow"],
  methods: {
    async updateMovies() {
      if (this.isProcessing) return;
      try {
        this.isProcessing = true;
        this.movies.clearMovies();
        // this.clearTable(this.movies.movies);
        const moviesFromSQL = await getAllMoviesApi();
        this.exportMoviesFromApiToTable(moviesFromSQL, this.movies.movies);
      } catch (error) {
        this.messages.push(error.message);
      } finally {
        this.isProcessing = false;
      }
    },
    async downloadMovies() {
      if (this.isProcessing) return;
      this.updateMovies();
      try {
        this.isProcessing = true;
        const downloadedMovies = await downloadMoviesApi();
        this.exportMoviesFromApiToTable(downloadedMovies, this.movies.movies);
      } catch (error) {
        this.messages.push(error.message);
      } finally {
        this.isProcessing = false;
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
            this.movies.addMovie({
              id: movie.id,
              extId: movie.extId,
              title: movie.title,
              year: movie.year,
              director: movie.director,
              rate: movie.rate,
            });
        });
      } catch (error) {
        this.messages.push(error.message);
      }
    },
  },
  created() {
    // Pobranie z bazy danych listy filmów i wypełnienie tabeli
    this.updateMovies();
  },
};
</script>

<style></style>
