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
</style>
