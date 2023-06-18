<template>
  <message-popup>
    <message-popup-header :title="title" />
    <div class="modal-body">
      <base-input
        v-model="formMovie.title"
        label="Tytuł"
        type="text"
        labelClasses="form-label"
        inputClasses="form-control"
      />
      <base-input
        v-model="formMovie.director"
        label="Dyrektor"
        type="text"
        labelClasses="form-label"
        inputClasses="form-control"
      />
      <base-input
        v-model="formMovie.year"
        label="Rok premiery"
        type="number"
        labelClasses="form-label"
        inputClasses="form-control"
      />
      <base-input
        v-model="formMovie.rate"
        label="Ocena"
        type="number"
        labelClasses="form-label"
        inputClasses="form-control"
      />
      <div>
        <p
          style="color: red"
          v-for="(message, index) in errMessage"
          :key="index"
        >
          {{ message }}
        </p>
      </div>
    </div>
    <message-popup-footer>
      <button @click="handleClick" class="btn btn-success">
        {{ btnName }}
      </button>
      <button @click="togglePopup()" class="btn btn-primary">
        Zamknij popup
      </button>
    </message-popup-footer>
  </message-popup>
</template>

<script>
// TODO: Komponent wykorzystywany również do EDYCJI FILMU!! - Zmienić nazwę!

// Validation
import useValidate from "@vuelidate/core";
import { between, maxLength, required, helpers } from "@vuelidate/validators";
// Components
import MessagePopup from "@/components/Messages/UI/MesssagePopup.vue";
import MessagePopupHeader from "@/components/Messages/UI/MessagePopupHeader.vue";
// import MessagePopupBody from "@/components/Messages/UI/MessagePopupErrorsBody.vue";
import MessagePopupFooter from "@/components/Messages/UI/MessagePopupFooter.vue";
import BaseInput from "./UI/BaseInput.vue";
// API Functions
import { addMovieApi, updateMovieApi } from "../../api/moviesApi";

export default {
  components: {
    BaseInput,
    MessagePopup,
    MessagePopupHeader,
    MessagePopupFooter,
  },
  props: ["movieId", "togglePopup", "isEditButton", "title"],
  setup() {
    return {
      v$: useValidate(),
    };
  },
  data() {
    return {
      formMovie: {
        title: "",
        director: "",
        year: 0,
        rate: 0,
      },
      btnName: this.isEditButton ? "Edytuj film" : "Dodaj film",
      errMessage: [],
      isProcessing: false,
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
    async handleClick() {
      if (this.isProcessing) return;
      let formMovie = {
        title: this.formMovie.title,
        director: this.formMovie.director,
        year: this.formMovie.year,
        rate: this.formMovie.rate,
      };
      this.isEditButton
        ? this.formValidation(this.editMovieAction, formMovie)
        : this.formValidation(this.addMovieAction, formMovie);
    },
    formValidation(movieAction, ...form) {
      this.v$.$validate();
      this.errMessage = [];
      if (!this.v$.$error) {
        movieAction(...form);
      } else {
        this.v$.$errors.forEach((error) =>
          this.errMessage.push(error.$message)
        );
      }
    },
    async addMovieAction(forms) {
      this.isProcessing = true;
      try {
        const movie = await addMovieApi(forms);
        this.movies.addMovie(movie);
        this.togglePopup();
      } catch (error) {
        this.messages.push(error.message);
      } finally {
        this.isProcessing = false;
      }
    },
    async editMovieAction(forms) {
      this.isProcessing = true;
      try {
        forms.id = this.movieId;
        const movie = await updateMovieApi(forms);
        this.movies.editMovie(movie);
        this.togglePopup();
      } catch (error) {
        this.messages.push(error.message);
      } finally {
        this.isProcessing = false;
      }
    },
  },

  inject: ["movies", "messages"],
};
</script>

<style></style>
