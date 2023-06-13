<template>
  <teleport to="body">
    <div class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title">{{ title }}</h3>
          </div>
          <div>
            <slot name="body">
              <!--  -->
            </slot>
            <div class="modal-body">
              <div class="mb-3"></div>
              <div class="alert alert-danger" role="alert">
                <h4 class="alert-heading">{{ header }}</h4>
                <div v-for="(msg, index) in messages" :key="index">
                  <p class="mb-0">{{ index + 1 }} - {{ msg[0] }}</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <slot name="action">
              <!--  -->
            </slot>
            <button @click="confirmErrors()" class="btn btn-danger">
              Potwierdź błędy
            </button>
            <button @click="togglePopup()" class="btn btn-primary">
              <!-- {{ submitBtn }} -->
              Zamknij popup
            </button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
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
