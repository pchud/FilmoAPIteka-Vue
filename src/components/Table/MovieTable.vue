<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Baza zewnętrzna</th>
        <th scope="col">Tytuł</th>
        <th scope="col">Rok</th>
        <th scope="col">Ocena</th>
        <th scope="col">Edytuj</th>
        <th scope="col">Usuń</th>
      </tr>
    </thead>
    <tbody>
      <movie-record
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      ></movie-record>
    </tbody>
  </table>
</template>

<script>
export default {
  inject: ["movies"],
};
</script>

<style></style>
