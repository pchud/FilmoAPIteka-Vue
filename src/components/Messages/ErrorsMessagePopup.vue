<template>
  <message-popup>
    <message-popup-header title="Lista błędów" />
    <message-popup-body header="Lista błędów" :messages="messages" />
    <message-popup-footer>
      <button @click="confirmErrors()" class="btn btn-danger">
        Potwierdź błędy
      </button>
      <button @click="togglePopup()" class="btn btn-primary">
        Zamknij popup
      </button>
    </message-popup-footer>
  </message-popup>
</template>

<script>
import MessagePopup from "./MesssagePopup.vue";
import MessagePopupHeader from "./MessagePopupHeader.vue";
import MessagePopupBody from "./MessagePopupBody.vue";
import MessagePopupFooter from "./MessagePopupFooter.vue";

export default {
  components: {
    MessagePopup,
    MessagePopupHeader,
    MessagePopupBody,
    MessagePopupFooter,
  },
  props: ["title", "togglePopup", "messages", "header"],
  methods: {
    confirmErrors() {
      // Czyszczenie błędów ....
    },
  },
};
</script>

<style></style>
