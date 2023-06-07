<template>
  <h1>Nav Buttons</h1>
  <button @click="addMovie">Dodaj film</button>
  <button @click="downloadMovies">Pobierz filmy</button>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
