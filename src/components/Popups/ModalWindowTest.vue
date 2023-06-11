<template>
  <div>
    <button
      @click="openModal"
      class="btn"
      :class="{ 'btn-warning': isEditButton, 'btn-primary': isAddButton }"
    >
      {{ submitBtn }}
    </button>
  </div>
  <teleport to="body">
    <div v-if="isModalOpen" class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <slot name="header"></slot>
            <!-- <h3 class="modal-title">{{ title }}</h3> -->
          </div>
          <div>
            <div class="modal-body">
              <slot name="body"></slot>
            </div>
            <div class="modal-footer">
              <slot name="footer"></slot>
              <button @click="closeModal" class="btn btn-secondary">
                Zamknij
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import { addMovie, updateMovie } from "../../api/moviesApi";

export default {
  props: ["movieId", "isEditButton", "isAddButton", "title", "submitBtn"],
  data() {
    return {
      formMovie: {
        title: "testetestes",
        director: "string",
        year: 266,
        rate: 0,
        id: 0,
      },

      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    async handleClick() {
      let formMovie = {};
      if (this.isAddButton) {
        formMovie = {
          title: this.formMovie.title,
          director: this.formMovie.director,
          year: this.formMovie.year,
          rate: this.formMovie.rate,
          id: this.formMovie.id,
        };
        const movie = await addMovie(formMovie);
        this.addMovieInTable(movie);
      }
      if (this.isEditButton) {
        formMovie = {
          id: this.movieId,
          title: this.formMovie.title,
          director: "string",
          year: this.formMovie.year,
          rate: 0,
        };
        const movie = await updateMovie(formMovie);
        this.editMovieInTable(movie);
      }
      this.closeModal();
    },

    // async editMovie() {
    //   const movie = {
    //     id: this.movieId,
    //     title: this.title,
    //     director: "test",
    //     year: this.year,
    //     rate: 0,
    //   };
    //   const data = await updateMovie(movie);

    //   // TODO: Sprawdzaj czy dane poprawnie zostały dodane i wtedy zaktualizuj
    //   this.movies.push(data);
    //   this.closeModal();
    // },
  },
  inject: ["movies", "addMovieInTable", "editMovieInTable"],
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

.modal-content,
.modal-footer {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}

/* .btn {
  margin-top: 10px;
} */
</style>
