<template>
  <div class="modal-footer">
    <slot>
      <!-- TEMPLATE  -->
    </slot>
  </div>
</template>

<script>
export default {
  props: ["title", "togglePopup", "messages", "header"],
  methods: {
    confirmErrors() {
      // Czyszczenie błędów ....
    },
  },
};
</script>

<style>
.modal-content,
.modal-footer {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}
</style>
