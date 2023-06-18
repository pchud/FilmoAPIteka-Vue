<template>
  <header>
    <nav-body :title="title">
      <nav-button
        title="Pobierz filmy"
        @click-action="movies.downloadMovies()"
      />
      <nav-button
        title="Dodaj film"
        @click="showMessageWindow('addMovieTrigger')"
      />
      <nav-button
        title="Aktualizuj dane"
        @click-action="movies.updateMovies()"
      />
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

export default {
  components: {
    NavButton,
    NavBody,
  },
  inject: ["movies", "messages", "showMessageWindow"],
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  created() {
    // Pobranie z bazy danych listy filmów i wypełnienie tabeli
    this.movies.updateMovies();
  },
};
</script>

<style></style>
