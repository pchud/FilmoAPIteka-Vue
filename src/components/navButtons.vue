<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/">MyMovies</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                @click="addMovie()"
                class="nav-link active"
                aria-current="page"
                href="#"
                >Dodaj film</a
              >
            </li>
            <li class="nav-item">
              <a
                @click="downloadMovies()"
                class="nav-link active"
                aria-current="page"
                href="#"
                >Pobierz filmy</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Disabled</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import { allMovies } from "../allMovies";
import { fetchDataFromAPI } from "../downloadData";

import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      movies: allMovies,
    };
  },
  methods: {
    addMovie() {
      console.log("Add movie - API not connected");
    },
    downloadMovies() {
      console.log("Download movies - API not connected");
      // const data = fetchDataFromAPI();
      // console.log(data);
      // console.log("downloaded");
      // const newObject = {
      //   id: 666,
      //   title: "Film 666",
      //   year: 2066,
      // };
      // Array.prototype.push();
      // console.log(this.movies);
    },
  },
  components: {},
};
</script>

<style></style>
