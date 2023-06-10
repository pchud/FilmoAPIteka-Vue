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
      <movie-record
        @delete-movie="deleteMovieInData"
        :movie="movie"
      ></movie-record>
    </tbody>
  </table>
</template>

<script>
// import moviesData from "../../data/moviesData.json";
// import { allMovies } from "../../allMovies";

export default {
  inject: ["movies"],
  methods: {},
  beforeMount() {
    console.log("PageTable: ", this.movies);
    // this.movies.forEach((element) => {
    //   console.log(element);
    // });
  },
};
</script>

<style></style>
