<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Year</th>
        <th scope="col">Edit</th>
        <th scope="col">Remove</th>
      </tr>
    </thead>
    <tbody v-for="movie in movies" :key="movie.id">
      <movieRecord
        @delete-movie="deleteMovieInData"
        :external-data="movie"
      ></movieRecord>
    </tbody>
  </table>
</template>

<script>
import moviesData from "../data/moviesData.json";
import movieRecord from "../components/movieRecord.vue";
import { allMovies } from "../allMovies";

export default {
  props: {},
  data() {
    return {
      title: "My Movies",
      showMovies: true,
      movies: allMovies,
    };
  },
  mounted() {
    // this.loadMovies();
  },

  methods: {
    deleteMovieInData(movieId) {
      // TODO: Dodać otwieranie popupu z potwierdzeniem.
      // this.movies = this.movies.filter((movie) => movie.id !== movieId);
    },
    editMovie() {
      // Wyświetlenie widoku modalnego
    },
  },
  components: {
    movieRecord,
  },
};
</script>

<style></style>
