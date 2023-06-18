<template>
  <div>
    <!-- POPUPS -->
    <errors-message-popup
      v-if="popupTriggers.errorsTrigger"
      :togglePopup="() => togglePopup('errorsTrigger')"
      :messages="errorMessages"
      title="Lista błędów"
      header="Lista błędów"
    />
    <add-movie-popup
      v-if="popupTriggers.addMovieTrigger"
      :togglePopup="() => togglePopup('addMovieTrigger')"
      :is-edit-button="false"
      title="Dodaj film"
    />
    <!-- PAGE -->
    <nav-header :title="title"></nav-header>
    <h1>{{ title }}</h1>
    <hr />
    <movie-table />
  </div>
</template>

<script>
// Library
import { reactive, ref } from "vue";
// Objects
import Movies from "./models/Movies";
import ErrorMessages from "./models/ErrorMessages";

export default {
  name: "App",
  provide() {
    return {
      // TODO: Przetestować Vuex.js (store)
      // Arrays
      movies: this.movies,
      messages: this.errorMessages,
      // Methods
      showMessageWindow: this.togglePopup,
    };
  },
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
      movies: new Movies(),
      errorMessages: ErrorMessages,
    };
  },
  computed: {
    isNewMessage() {
      if (this.errorMessages.getCount() > this.errorMessages.lastCount.value) {
        return true;
      }
      return false;
    },
  },
  watch: {
    isNewMessage(newMessage) {
      if (newMessage) {
        this.errorMessages.setCount();
        this.popupTriggers.errorsTrigger = true;
      }
    },
  },
  mounted() {
    this.errorMessages.setCount();
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
