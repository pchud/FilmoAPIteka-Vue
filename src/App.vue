<template>
  <div>
    <navButtons></navButtons>
    <modalWindow></modalWindow>
    <!-- <modalPopupTest></modalPopupTest> -->
    <h1>{{ title }}</h1>
    <form>
      <label for="title">Title</label><br />
      <input type="text" id="title" ref="title" /><br />
      <label for="year">Year</label><br />
      <input type="number" id="year" ref="year" /><br />
      <button @click="handleClick">Add movie</button>
    </form>

    <pageTable></pageTable>
  </div>
</template>

<script>
import pageTable from "./components/pageTable.vue";
import navButtons from "./components/navButtons.vue";
import modalWindow from "./components/modalWindow.vue";
// import modalPopupTest from "./components/modalPopupTest.vue";
// import moviesData from "../data/moviesData.json";

import { allMovies } from "./allMovies";

export default {
  name: "App",
  data() {
    return {
      title: "My Movies",
      showMovies: true,
      // movies: moviesData,
      allMovies,
    };
  },
  methods: {
    handleClick() {
      console.log("test", allMovies);

      const title = this.$refs.title.value;
      const year = this.$refs.year.value;

      // this.movies.push({ id: this.movies.length + 1, name: title, year: year });
    },
  },
  components: {
    navButtons,
    pageTable,
    modalWindow,
    // modalPopupTest,
    //HelloWorld,
    // navButtons, pageTable, *modalWindow
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
