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
            <h3 class="modal-title">{{ title }}</h3>
          </div>
          <div>
            <div class="modal-body">
              <!-- <form> -->
              <div class="mb-3">
                <label for="title" class="form-label">Tytuł</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="formMovie.title"
                  id="title"
                  placeholder="Tytuł"
                />
              </div>
              <div class="mb-3">
                <label for="title" class="form-label">Rok premiery</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="formMovie.year"
                  id="year"
                  placeholder="Rok premiery"
                />
              </div>
              <div>
                <p v-for="(message, index) in errMessage" :key="index">
                  {{ message }}
                </p>
              </div>
              <!-- </form>   -->
            </div>
            <div class="modal-footer">
              <button @click="handleClick" class="btn btn-primary">
                {{ submitBtn }}
              </button>
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
import useValidate from "@vuelidate/core";
import { between, maxLength, required, helpers } from "@vuelidate/validators";
import { addMovieApi, updateMovieApi } from "../../api/moviesApi";

export default {
  props: ["movieId", "isEditButton", "isAddButton", "title", "submitBtn"],
  setup() {
    return {
      v$: useValidate(),
    };
  },
  data() {
    return {
      // v$: useValidate(),
      formMovie: {
        title: "",
        director: "",
        year: null,
        rate: 5,
      },
      errMessage: [],
      isModalOpen: false,
    };
  },
  validations() {
    return {
      formMovie: {
        title: {
          required: helpers.withMessage("Tytuł jest wymagany!", required),
          maxLength: helpers.withMessage(
            `Maks. długość tytułu to 200 znaków`,
            maxLength(200)
          ),
        },
        director: {},
        year: {
          required: helpers.withMessage("Rok jest wymagany!", required),
          betweenValue: helpers.withMessage(
            "Błędny zakres roku premiery. (1900 - 2200)",
            between(1900, 2200)
          ),
        },
        rate: {},
      },
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
        this.v$.$validate();
        console.log(this.v$);
        if (!this.v$.$error) {
          const movie = await addMovieApi(formMovie);
          alert("Form successfully submitted.");
          this.addMovieInTable(movie);
          this.closeModal();
        } else {
          console.log(this.v$.$errors);
          console.log(this.v$.$errors[0].$propertyPath);
          this.errMessage = [];
          this.v$.$errors.forEach((error) =>
            this.errMessage.push(error.$message)
          );
          // console.log(this.errMessage);

          alert("Form failed validation.", this.v$.$erorr);
        }
      }
      if (this.isEditButton) {
        formMovie = {
          id: this.movieId,
          title: this.formMovie.title,
          director: "string",
          year: this.formMovie.year,
          rate: 0,
        };
        const movie = await updateMovieApi(formMovie);
        this.editMovieInTable(movie);
        this.closeModal();
      }
    },
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
