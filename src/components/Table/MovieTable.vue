<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Baza zewnętrzna</th>
        <th scope="col">Tytuł</th>
        <th scope="col">Reżyser</th>
        <th scope="col">Rok</th>
        <th scope="col">Ocena</th>
        <th scope="col">Edytuj</th>
        <th scope="col">Usuń</th>
      </tr>
    </thead>
    <tbody>
      <movie-record
        v-for="movie in movies.movies"
        :key="movie.id"
        :movie="movie"
      ></movie-record>
    </tbody>
  </table>
</template>

<script>
import MovieRecord from "@/components/Table/MovieRecord.vue";

export default {
  components: { MovieRecord },
  inject: ["movies"],
};
</script>

<style></style>
