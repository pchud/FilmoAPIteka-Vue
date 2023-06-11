<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">{{ title }}</a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <slot name="buttons"> </slot>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style></style>
