<template>
  <teleport to="body">
    <div class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <slot>
            <!-- TEMPLATE -->
          </slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {};
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
