<template>
  <div>
    <nav-header :title="title"></nav-header>
    <h1>{{ title }}</h1>

    <modal-window
      :is-add-button="true"
      :title="modalTitle"
      :submitBtn="modalButton"
    ></modal-window>
    <movie-table></movie-table>
  </div>
  <!-- TEST OKNO MODALNE -->
  <!-- <base-dialog
    v-if="!inputIsInvalid"
    title="Invalid Input"
    @close="confirmError"
  >
    <template #default>
      <p>Unfortunately, at least one input value is invalid.</p>
      <p>
        Please check all inputs and make sure you enter at least a few
        characters into each input field.
      </p>
    </template>
    <template #actions>
      <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialog> -->
</template>

<script>
import NavHeader from "./components/Navigation/NavHeader.vue";
export default {
  components: { NavHeader },
  // components: { BaseDialog },
  name: "App",
  data() {
    return {
      title: "FilmoAPIteka",
      allMovies: [],
      isModalVisible: false,
      modalTitle: "Dodaj film",
      modalButton: "Dodaj",
    };
  },
  provide() {
    return {
      movies: this.allMovies,
      deleteMovieInTable: this.deleteMovie,
      editMovieInTable: this.editMovie,
      addMovieInTable: this.addMovie,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    addMovie(newMovie) {
      this.allMovies.push(newMovie);
    },
    deleteMovie(movieId) {
      const movieIndex = this.allMovies.findIndex(
        (movie) => movie.id === movieId
      );
      this.allMovies.splice(movieIndex, 1);
    },
    editMovie(editMovie) {
      const movieIndex = this.allMovies.findIndex(
        (movie) => movie.id === editMovie.id
      );
      if (movieIndex !== 1) this.allMovies[movieIndex] = editMovie;
    },
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
