<template>
  <message-popup>
    <message-popup-header :title="title" />
    <div class="modal-body">Czy chcesz usunąć film?</div>
    <message-popup-footer>
      <button @click="deleteMovie(movieId)" class="btn btn-danger">
        Usuń film
      </button>
      <button @click="togglePopup()" class="btn btn-primary">
        Zamknij popup
      </button>
    </message-popup-footer>
  </message-popup>
</template>

<script>
import MessagePopup from "@/components/Messages/UI/MesssagePopup.vue";
import MessagePopupHeader from "@/components/Messages/UI/MessagePopupHeader.vue";
import MessagePopupFooter from "@/components/Messages/UI/MessagePopupFooter.vue";

export default {
  components: {
    MessagePopup,
    MessagePopupHeader,
    MessagePopupFooter,
    // MessagePopupBody,
  },
  props: ["title", "deleteMovie", "movieId", "togglePopup"],
};
</script>

<style></style>
