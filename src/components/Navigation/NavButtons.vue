<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/">{{ title }}</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                @click="addMovie()"
                class="nav-link active"
                aria-current="page"
                href="#"
                >Dodaj film</a
              >
            </li>
            <li class="nav-item">
              <a
                @click="downloadMovies()"
                class="nav-link active"
                aria-current="page"
                href="#"
                >Pobierz filmy</a
              >
            </li>
            <li class="nav-item">
              <a
                @click="updateMovies()"
                class="nav-link active"
                aria-current="page"
                href="#"
                >Aktualizuj dane</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Disabled</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import { allMovies, addMovie, findMovie } from "../../allMovies";
import { downloadMovies, getAllMovies } from "../../api/moviesApi";

import axios from "axios";

export default {
  name: "NavButtons",
  props: ["title"],
  data() {
    return {
      // movies: allMovies,
    };
  },
  methods: {
    async updateMovies() {
      const moviesFromSQL = await getAllMovies();
      moviesFromSQL.forEach((movie) => {
        if (!this.movies.some((movieInTable) => movieInTable.id === movie.id))
          this.addMovie({
            id: movie.id,
            title: movie.title,
            year: movie.year,
          });
      });
    },
    async downloadMovies() {
      const downloadedMovies = await downloadMovies();
      console.log(downloadedMovies);
      downloadedMovies.forEach((movie) => {
        if (!this.movies.some((movieInTable) => movieInTable.id === movie.id))
          this.addMovie({
            id: movie.id,
            title: movie.title,
            year: movie.year,
          });
      });
    },
  },
  inject: ["movies", "addMovie"],
  beforeMount() {
    // Pobranie z bazy danych listy filmów i wypełnienie tabeli
    this.updateMovies();
  },
  // beforeUpdate() {
  //   this.updateMovies();
  // },
  // mounted() {
  //   this.updateMovies();
  // },
};
</script>

<style></style>
