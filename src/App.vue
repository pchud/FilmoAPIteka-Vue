<template>
  <div>
    <nav-buttons :title="title"></nav-buttons>
    <h1>{{ title }}</h1>
    <modal-window :is-add-button="true"></modal-window>
    <page-table></page-table>
  </div>
</template>

<script>
// import moviesData from "../data/moviesData.json";
// import { allMovies } from "./allMovies";

export default {
  name: "App",
  data() {
    return {
      title: "FilmoApika",
      allMovies: [],
    };
  },
  provide() {
    return {
      movies: this.allMovies,
      deleteMovieInTable: this.deleteMovie,
      editMovie: this.editMovie,
      addMovie: this.addMovie,
    };
  },
  methods: {
    addMovie(newMovie) {
      this.allMovies.push(newMovie);
    },
    deleteMovie(movieId) {
      const movieIndex = this.allMovies.findIndex(
        (movie) => movie.id === movieId
      );
      this.allMovies.splice(movieIndex, 1);
    },
    editMovie(movieId) {},
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
