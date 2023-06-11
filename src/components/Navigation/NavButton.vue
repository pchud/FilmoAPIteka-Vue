<template>
  <li class="nav-item">
    <a
      class="nav-link active"
      aria-current="page"
      href="#"
      @click="clickAction()"
    >
      {{ title }}
    </a>
  </li>
</template>

<script>
export default {
  props: ["title"],
  setup() {},
  methods: {
    clickAction() {
      this.$emit("click-action");
    },
  },
};
</script>

<style></style>
