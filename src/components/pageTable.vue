<template>
  <h1>Page Table</h1>
  <li v-for="movie in movies" :key="movie.id">
    <p>
      {{ movie.id }} - {{ movie.name }} - {{ movie.year }} -
      {{ movie.editAction }}-
      {{ movie.deleteAction }}
    </p>
  </li>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      title: "My Movies",
      showMovies: true,
      // TODO: Wywalić ze struktury filmu przyciski...
      movies: [
        {
          id: 1,
          name: "Władca Piersieni",
          year: "2003",
          editAction: "Edytuj",
          deleteAction: "Usuń",
        },
        {
          id: 2,
          name: "Matrix",
          year: "2007",
          editAction: "Edytuj",
          deleteAction: "Usuń",
        },
        {
          id: 3,
          name: "Avatar",
          year: "2015",
          editAction: "Edytuj",
          deleteAction: "Usuń",
        },
      ],
    };
  },
  methods: {
    handleClick() {
      const title = this.$refs.title.value;
      const year = this.$refs.year.value;

      this.movies.push({ id: this.movies.length + 1, name: title, year: year });
      // TODO: dodać sprawdzanie czy ID wolny
    },
    deleteMovie() {
      // Usuwanie po numerze ID
    },
    editMovie() {
      // Wyświetlenie widoku modalnego
    },
  },
  components: {
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
  margin-top: 60px;
}
</style>
