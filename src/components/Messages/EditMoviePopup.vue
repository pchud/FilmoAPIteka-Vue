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
        <p v-for="(message, index) in errMessage" :key="index">
          {{ message }}
        </p>
      </div>
    </div>
    <message-popup-footer>
      <button @click="handleClick" class="btn btn-success">Edytuj film</button>
      <button @click="togglePopup()" class="btn btn-primary">
        Zamknij popup
      </button>
    </message-popup-footer>
  </message-popup>
</template>

<script>
import MessagePopup from "@/components/Messages/UI/MesssagePopup.vue"; //"./MesssagePopup.vue";
import MessagePopupHeader from "@/components/Messages/UI/MessagePopupHeader.vue";
import MessagePopupErrorsBody from "@/components/Messages/UI/MessagePopupErrorsBody.vue";

import MessagePopupFooter from "@/components/Messages/UI/MessagePopupFooter.vue";
import useValidate from "@vuelidate/core";
import { between, maxLength, required, helpers } from "@vuelidate/validators";
import { addMovieApi, updateMovieApi } from "../../api/moviesApi";
import BaseInput from "./BaseInput.vue";

export default {
  components: {
    MessagePopup,
    MessagePopupHeader,
    // MessagePopupErrorsBody,
    MessagePopupFooter,
    BaseInput,
  },
  props: ["movieId", "togglePopup", "isEditButton", "isAddButton", "title"],
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
      if (this.isAddButton) {
        const movie = await this.formAddMovie(
          this.formMovie,
          this.v$,
          NaN,
          this.errMessage
        );

        //   formMovie = {
        //     title: this.formMovie.title,
        //     director: this.formMovie.director,
        //     year: this.formMovie.year,
        //     rate: this.formMovie.rate,
        //     id: this.formMovie.id,
        //   };
        //   this.v$.$validate();
        //   console.log(this.v$);
        //   if (!this.v$.$error) {
        //     // TODO: OBSŁUGA BŁĘDU!!!
        //     const movie = await addMovieApi(formMovie);
        //     alert("Form successfully submitted.");
        //     this.addMovieInTable(movie);
        //     this.togglePopup();
        //   } else {
        //     console.log(this.v$.$errors);
        //     console.log(this.v$.$errors[0].$propertyPath);
        //     this.errMessage = [];
        //     this.v$.$errors.forEach((error) =>
        //       this.errMessage.push(error.$message)
        //     );
        //     // console.log(this.errMessage);
        //     alert("Form failed validation.", this.v$.$erorr);
        //   }
      }
      if (this.isEditButton) {
        // TODO: Dokończyć funkcję!! Edycji (weryfikacja nie działa)
        let formMovie = {};
        formMovie = {
          id: this.movieId,
          title: this.formMovie.title,
          director: "string",
          year: this.formMovie.year,
          rate: 0,
        };
        const movie = await updateMovieApi(formMovie);
        this.editMovieInTable(movie);
        this.togglePopup();
      }
    },

    async formAddMovie(formMovie, v$, errMessages, validationMessages) {
      let form = {
        title: formMovie.title,
        director: formMovie.director,
        year: formMovie.year,
        rate: formMovie.rate,
        id: formMovie.id,
      };
      // this.v$.$validate();
      // console.log(this.v$);
      if (!v$.$error) {
        // TODO: OBSŁUGA BŁĘDU!!!
        try {
          const movie = await addMovieApi(form);
          // return await addMovieApi(form);
          // alert("Form successfully submitted.");
          this.addMovieInTable(movie);
          this.togglePopup();
        } catch (error) {
          console.log(error.message);
          errMessages.push([error.message]);
        }
      } else {
        // console.log(this.v$.$errors);
        // console.log(this.v$.$errors[0].$propertyPath);
        validationMessages = [];
        v$.$errors.forEach((error) => validationMessages.push(error.$message));
      }
    },

    async formValidation(formMovie, v$, errMessages, validationMessages) {
      let form = {
        title: formMovie.title,
        director: formMovie.director,
        year: formMovie.year,
        rate: formMovie.rate,
        id: formMovie.id,
      };
      // this.v$.$validate();
      // console.log(this.v$);
      if (!v$.$error) {
        // TODO: OBSŁUGA BŁĘDU!!!
        return await this.handleError(addMovieAndClosePopup(form), errMessages);
        // try {
        //   const movie = await addMovieApi(form);
        //   // return await addMovieApi(form);
        //   // alert("Form successfully submitted.");
        //   this.addMovieInTable(movie);
        //   this.togglePopup();
        // } catch (error) {
        //   console.log(error.message);
        //   errMessages.push([error.message]);
        // }
      } else {
        // console.log(this.v$.$errors);
        // console.log(this.v$.$errors[0].$propertyPath);
        validationMessages = [];
        v$.$errors.forEach((error) => validationMessages.push(error.$message));
      }
    },
    async handleError(fn, errMessages, ...args) {
      try {
        return await fn(...args);
      } catch (error) {
        console.log(error.message);
        errMessages.push([error.message]);
      }
    },
    async addMovieAndClosePopup(form) {
      const movie = await addMovieApi(form);
      this.addMovieInTable(movie);
      this.togglePopup();
    },
    async editMovie(form) {
      const movie = await updateMovieApi(form);
      this.editMovieInTable(movie);
      this.togglePopup();
    },

    async formEditMovie(formMovie) {
      if (this.isEditButton) {
        // TODO: Dokończyć funkcję!! Edycji (weryfikacja nie działa)
        formMovie = {
          id: this.movieId,
          title: this.formMovie.title,
          director: "string",
          year: this.formMovie.year,
          rate: 0,
        };
        const movie = await updateMovieApi(formMovie);
        this.editMovieInTable(movie);
        this.togglePopup();
      }
    },
  },

  inject: ["movies", "addMovieInTable", "editMovieInTable"],
};
</script>

<style></style>
