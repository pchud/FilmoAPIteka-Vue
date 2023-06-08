<template>
  <tr>
    <th scope="row">{{ externalData.id }}</th>
    <td>{{ externalData.title }}</td>
    <td>{{ externalData.year }}</td>
    <td>
      <button
        @click="editMovie(externalData.id)"
        type="button"
        class="btn btn-warning"
      >
        Edit
      </button>
    </td>
    <td>
      <button
        @click="deleteMovie(externalData.id)"
        type="button"
        class="btn btn-danger"
      >
        Delete
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    externalData: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {};
  },
  mounted() {},

  methods: {
    deleteMovie(movieId) {
      // Comment: Usuwanie po numerze ID
      this.$emit("delete-movie", movieId);
      console.log("API event - delete movie with Id: ", movieId);
    },
    editMovie(movieId) {
      // Wyświetlenie widoku modalnego
      console.log("API event - edit movie with Id: ", movieId);
    },
  },
  components: {},
};
</script>

<style></style>
