<template>
  <tr>
    <td>{{ movie.id }}</td>
    <td>{{ movie.extId > 0 ? "✅ Tak" : "❌ Nie" }}</td>
    <td>{{ movie.title }}</td>
    <td>{{ movie.year }}</td>
    <td>{{ movie.rate }}</td>
    <td>
      <modal-window
        :is-edit-button="true"
        :movieId="movie.id"
        :title="modalTitle"
        :submitBtn="modalButton"
      ></modal-window>
    </td>
    <td>
      <modal-window-test
        :is-add-button="true"
        :title="{ test }"
        :submitBtn="deleteButton"
      >
        <template #header>
          <h3 class="modal-title">Błąd</h3>
        </template>
        <template #body> Czy chcesz usunąć film? </template>
        <template #footer>
          <button @click="deleteMovie(movie.id)" class="btn btn-danger">
            Usuń
          </button>
        </template>
      </modal-window-test>
      <button
        @click="deleteMovie(movie.id)"
        type="button"
        class="btn btn-danger"
      >
        Szybkie usuwanie
      </button>
    </td>
  </tr>
</template>

<script>
import { deleteMovieApi } from "../../api/moviesApi";

export default {
  props: {
    movie: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      modalTitle: "Edytuj film",
      modalButton: "Edytuj",
      deleteButton: "Usuń",
    };
  },
  inject: ["movies", "deleteMovieInTable", "editMovieInTable"],

  methods: {
    async deleteMovie(movieId) {
      await deleteMovieApi(movieId);
      this.deleteMovieInTable(movieId);
    },
  },
};
</script>

<style></style>
