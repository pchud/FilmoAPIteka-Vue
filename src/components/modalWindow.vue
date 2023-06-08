<template>
  <div>
    <button @click="openModal" class="btn btn-primary">Open popup</button>

    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <h2>Adding / Editing movie</h2>
        <form>
          <label for="title">Title</label><br />
          <input type="text" id="title" ref="title" /><br />
          <label for="year">Year</label><br />
          <input type="number" id="year" ref="year" /><br />
          <button @click="handleClick" class="btn btn-primary">
            Add movie / Edit movie
          </button>
        </form>
        <button @click="closeModal" class="btn btn-secondary">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
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

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
}

.btn {
  margin-top: 10px;
}
</style>
