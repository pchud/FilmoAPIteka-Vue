<template>
  <div class="modal-body">
    <div class="mb-3"></div>
    <div class="alert alert-danger" role="alert">
      <h4 class="alert-heading">{{ header }}</h4>
      <div v-for="(msg, index) in messages" :key="index">
        <p class="mb-0">{{ index + 1 }} - {{ msg }}</p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["messages", "header"],
};
</script>

<style></style>
