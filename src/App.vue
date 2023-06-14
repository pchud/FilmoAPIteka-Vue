<template>
  <div>
    <!-- POPUPS -->
    <errors-message-popup
      v-if="popupTriggers.errorsTrigger"
      :togglePopup="() => togglePopup('errorsTrigger')"
      :messages="messages"
      title="Lista błędów"
      header="Lista błędów"
    />
    <add-movie-popup
      v-if="popupTriggers.addMovieTrigger"
      :togglePopup="() => togglePopup('addMovieTrigger')"
      :is-add-button="true"
      title="Dodaj film"
      :submitBtn="modalButton"
    />
    <!-- PAGE -->
    <nav-header :title="title"></nav-header>
    <h1>{{ title }}</h1>
    <hr />
    <movie-table />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",
  setup() {
    const popupTriggers = ref({
      errorsTrigger: false,
      addMovieTrigger: false,
    });
    const togglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    return {
      popupTriggers,
      togglePopup,
    };
  },
  data() {
    return {
      title: "FilmoAPIteka",
      allMovies: [],
      messages: [],
      lastMessagesLength: 0,
    };
  },
  provide() {
    return {
      // Arrays
      movies: this.allMovies,
      messages: this.messages,
      // Methods
      deleteMovieInTable: this.deleteMovie,
      editMovieInTable: this.editMovie,
      addMovieInTable: this.addMovie,
      showMessageWindow: this.togglePopup,
    };
  },
  mounted() {
    this.lastMessagesLength = this.messages.length;
  },
  computed: {
    isNewMessage() {
      if (this.messages.length > this.lastMessagesLength) {
        return true;
      }
      return false;
    },
  },
  watch: {
    isNewMessage(newMessage) {
      if (newMessage) {
        this.lastMessagesLength = this.messages.length;
        this.popupTriggers.buttonTrigger = true;
      }
    },
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
