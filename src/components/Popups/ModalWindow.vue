<template>
  <div>
    <button @click="openModal" class="btn btn-primary">Open popup</button>

    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <h2>Adding / Editing movie</h2>
        <form>
          <label for="title">Title</label><br />
          <input type="text" v-model="title" id="title" /><br />
          <label for="year">Year</label><br />
          <input type="number" v-model="year" id="year" /><br />
          <button @click="handleClick" class="btn btn-primary">
            Add movie / Edit movie
          </button>
        </form>
        <button @click="closeModal" class="btn btn-secondary">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import { addMovie, updateMovie } from "../../api/moviesApi";

export default {
  props: ["movieId", "isEditButton", "isAddButton"],
  data() {
    return {
      title: "",
      year: "",
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      console.log(
        "isAddButton: ",
        this.isAddButton,
        " IsEditButton: ",
        this.isEditButton
      );
      console.log("MoveID: ", this.movieId);
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    async handleClick() {
      // this.isAddButton ? this.addMovie() : "";
      this.isEditButton ? this.editMovie() : "";
    },

    async addMovie() {
      const movie = {
        title: this.title,
        director: "test",
        year: this.year,
        rate: 0,
      };
      const data = await addMovie(movie);
      console.log(data);
      // TODO: Sprawdzaj czy dane poprawnie zostały dodane i wtedy zaktualizuj
      this.movies.push(data);
      this.closeModal();
    },
    async editMovie() {
      const movie = {
        id: this.movieId,
        title: this.title,
        director: "test",
        year: this.year,
        rate: 0,
      };
      console.log(movie);
      const data = await updateMovie(movie);
      console.log(data);
      // TODO: Sprawdzaj czy dane poprawnie zostały dodane i wtedy zaktualizuj
      this.movies.push(data);
      this.closeModal();
    },
  },
  inject: ["movies"],
};
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
}

.btn {
  margin-top: 10px;
}
</style>
