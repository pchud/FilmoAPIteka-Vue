<template>
  <!-- POPUPS -->
  <add-movie-popup
    v-if="popupTriggers.editTrigger"
    :togglePopup="() => togglePopup('editTrigger')"
    :is-edit-button="true"
    :movieId="movie.id"
    title="Edytuj film"
  />
  <delete-movie-popup
    v-if="popupTriggers.deleteTrigger"
    :togglePopup="() => togglePopup('deleteTrigger')"
    title="Usuń film"
    :movieId="movie.id"
    :deleteMovie="deleteMovie"
  />
  <!-- RECORD -->
  <tr>
    <td>{{ movie.id }}</td>
    <td>{{ movie.extId > 0 ? "✅ Tak" : "❌ Nie" }}</td>
    <td>{{ movie.title }}</td>
    <td>{{ movie.year }}</td>
    <td>{{ movie.rate }}</td>
    <td>
      <button class="btn btn-warning" @click="() => togglePopup('editTrigger')">
        Edytuj
      </button>
    </td>
    <td>
      <button
        class="btn btn-danger"
        @click="() => togglePopup('deleteTrigger')"
      >
        Usuń
      </button>
    </td>
  </tr>
</template>

<script>
import { ref } from "vue";
import { deleteMovieApi } from "../../api/moviesApi";

export default {
  setup() {
    const popupTriggers = ref({
      deleteTrigger: false,
      editTrigger: false,
    });
    const togglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    return {
      popupTriggers,
      togglePopup,
    };
  },
  props: {
    movie: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      isProcessing: false,
    };
  },
  inject: ["movies", "deleteMovieInTable", "editMovieInTable", "messages"],
  methods: {
    async deleteMovie(movieId) {
      if (this.isProcessing) return;
      this.isProcessing = true;
      try {
        await deleteMovieApi(movieId);
        this.deleteMovieInTable(movieId);
      } catch (error) {
        this.messages.push(error.message);
      } finally {
        this.isProcessing = false;
      }
    },
  },
};
</script>

<style></style>
