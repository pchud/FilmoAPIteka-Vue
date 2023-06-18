<template>
  <message-popup>
    <message-popup-header title="Lista błędów" />
    <message-popup-errors-body header="Lista błędów" :messages="messages" />
    <message-popup-footer>
      <button @click="confirmErrors()" class="btn btn-danger disabled">
        Potwierdź błędy
      </button>
      <button @click="togglePopup()" class="btn btn-primary">
        Zamknij popup
      </button>
    </message-popup-footer>
  </message-popup>
</template>

<script>
import MessagePopup from "./UI/MesssagePopup.vue";
import MessagePopupHeader from "./UI/MessagePopupHeader.vue";
import MessagePopupErrorsBody from "./UI/MessagePopupErrorsBody.vue";
import MessagePopupFooter from "./UI/MessagePopupFooter.vue";

export default {
  components: {
    MessagePopup,
    MessagePopupHeader,
    MessagePopupErrorsBody,
    MessagePopupFooter,
  },
  props: ["title", "togglePopup", "messages", "header"],
  methods: {
    confirmErrors() {
      // Czyszczenie błędów .... brak implementacji (jeszcze)
    },
  },
};
</script>

<style></style>
