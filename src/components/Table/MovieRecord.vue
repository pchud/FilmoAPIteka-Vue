<template>
  <tr>
    <th scope="row">{{ movie.id }}</th>
    <td>{{ movie.title }}</td>
    <td>{{ movie.year }}</td>
    <td>
      <modal-window :is-edit-button="true" :movieId="movie.id"></modal-window>

      <button
        @click="editMovie(movie.id)"
        type="button"
        class="btn btn-warning"
      >
        Edit
      </button>
    </td>
    <td>
      <button
        @click="deleteMovie(movie.id)"
        type="button"
        class="btn btn-danger"
      >
        Delete
      </button>
    </td>
  </tr>
</template>

<script>
import { deleteMovie } from "../../api/moviesApi";
import { deleteMovieStruct } from "../../allMovies";

export default {
  props: {
    movie: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {};
  },
  inject: ["movies", "deleteMovieInTable"],

  methods: {
    deleteMovie(movieId) {
      // TODO: Otwieranie popupu i odświeżanie danych po usunięciu
      deleteMovie(movieId);
      this.deleteMovieInTable(movieId);
      // this.movies = deleteMovieStruct(movieId);
      console.log("Usunięte", movieId);
      // Comment: Usuwanie po numerze ID
      // this.$emit("delete-movie", movieId);
    },
    editMovie(movieId) {
      // Wyświetlenie widoku modalnego
      console.log("API event - edit movie with Id: ", movieId);
    },
  },
  components: {},
};
</script>

<style></style>
